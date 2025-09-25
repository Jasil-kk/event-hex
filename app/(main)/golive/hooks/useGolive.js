import { useState, useRef, useEffect } from "react";

export const useGolive = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [audioURL, setAudioURL] = useState(null);
  const [transcribedText, setTranscribedText] = useState("");
  const [showTranscription, setShowTranscription] = useState(false);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const recognitionRef = useRef(null);

  // Format time
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `00:${m}:${s}`;
  };

  // Start recording (audio + speech recognition)
  const startRecording = async () => {
    setShowTranscription(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        chunksRef.current = [];
        setAudioURL(URL.createObjectURL(blob));
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
      setIsPaused(false);
      setTime(0);
      setTranscribedText(""); // reset transcript

      // start timer
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      // --- Speech recognition setup ---
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US"; // you can change language code
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (event) => {
          let finalTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            finalTranscript += event.results[i][0].transcript;
          }
          setTranscribedText(finalTranscript);
        };

        recognition.onerror = (event) => {
          console.error("Speech recognition error", event.error);
        };

        recognition.start();
        recognitionRef.current = recognition;
      }
    } catch (err) {
      console.error("Error accessing microphone", err);
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((t) => t.stop());
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const playRecording = () => {
    if (audioURL) {
      const audio = new Audio(audioURL);
      setShowTranscription(true);

      audio.play();

      audio.onended = () => {
        setShowTranscription(false);
      };
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, []);

  return {
    isRecording,
    isPaused,
    time,
    transcribedText,
    formatTime,
    playRecording,
    startRecording,
    stopRecording,
    showTranscription,
  };
};
