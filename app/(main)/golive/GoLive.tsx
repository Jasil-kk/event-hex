"use client";

import roundIcon from "@images/png/round-icon.png";
import Image from "next/image";
import sessions from "@/data/sessions.json";
import LeaveButton from "./components/LeaveButton";
import SoundCheckButton from "./components/SoundCheckButton";
import GoLiveButton from "./components/GoLiveButton";
import PauseButton from "./components/PauseButton";
import { useRouter } from "next/navigation";
import { useGolive } from "./hooks/useGolive";
import Dropdown from "@/components/Dropdown";

interface Props {
  sessionId: string | number;
}

const options = [
  { value: "english", label: "English" },
  { value: "french", label: "French" },
  { value: "dutch", label: "Dutch" },
];

export default function Golive({ sessionId }: Props) {
  const router = useRouter();
  const sessionNumber =
    typeof sessionId === "string" ? parseInt(sessionId) : sessionId;
  const session = sessions.find((s) => s.id === sessionNumber);
  const {
    isRecording,
    isPaused,
    time,
    transcribedText,
    formatTime,
    playRecording,
    startRecording,
    stopRecording,
    showTranscription,
  } = useGolive();

  const handleSelect = (option: { value: string; label: string }) => {
    console.log("Selected:", option);
  };

  if (!session) {
    return (
      <div className="w-full flex justify-center items-center h-[400px] text-center text-[#525866] font-medium">
        Session not found
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <div className="mt-5 mx-auto w-full max-w-[800px] flex items-center justify-between">
        <div>
          <h2 className="text-[#0A0D14] font-medium text-[22px]">
            {session.title}
          </h2>
          <p className="text-[#525866] font-medium text-sm">
            {session.date} | {session.time}
          </p>
        </div>
        <Dropdown
          options={options}
          onSelect={handleSelect}
          placeholder="Select Language"
        />
      </div>

      <div
        style={{
          background:
            "linear-gradient(107.76deg, #C2D6FF -8.64%, #FFFFFF 71.51%)",
        }}
        className="mx-auto mt-5 w-full max-w-[800px] h-[464px] rounded-[50px] border border-[#E2E4E9] flex items-center justify-center relative overflow-hidden"
      >
        {(isRecording || showTranscription) && (
          <>
            <div className="absolute top-1/2 translate-y-[-50%] w-[calc(100%+20px)] animate-wave">
              <svg
                className="w-ful"
                viewBox="0 0 778 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1C6.19951 2.40199 17.7138 6.18313 42.7925 6.19729C49.8387 6.20127 53.8591 3.83231 58.5638 4.29964C66.5185 5.0898 70.6201 13.7171 76.3773 17.746C85.1542 23.8883 103.074 17.5407 109.106 13.5259C115.078 9.55085 120.353 5.72996 126.904 4.07306C134.759 2.08597 140.79 1.94882 143.924 1.47441C147.055 1.00038 150.733 5.22014 154.653 10.8706C162.863 22.7082 160.693 36.3756 163.308 42.0473C164.871 45.4369 169.584 48.1863 178.168 51.0186C207.001 60.5313 216.175 44.4477 222.466 42.0756C225.514 40.9265 228.758 40.185 231.891 39.7106C238.427 38.7213 243.414 46.2887 249.43 51.0257C255.742 55.9952 263.835 43.513 269.592 40.1921C276.829 36.0176 283.722 32.6369 294.443 32.3891C305.567 32.1319 317.715 38.7547 327.705 39.0025C339.687 39.2998 352.839 30.2861 361.997 26.7386C370.241 23.5454 381.083 23.6585 389.495 24.8339C399.359 26.2123 407.819 27.4255 415.414 28.1406C423.184 28.8723 433.455 30.7393 444.977 31.2137C460.07 31.8351 465.406 19.9198 473.268 15.6431C483.147 10.2692 491.074 18.447 499.973 21.9945C507.188 24.8708 514.637 27.4255 521.187 29.316C528.698 31.4839 535.058 31.2208 542.912 28.8629C551.771 26.2032 555.479 18.9569 561.77 16.5848C568.686 13.9773 577.471 16.0962 583.762 19.1622C589.674 22.0435 597.358 25.0463 604.442 29.309C612.252 34.008 619.884 38.2732 626.175 42.0544C632.466 45.8355 638.734 48.6678 645.025 50.5584C646.604 51.0328 648.159 51.5001 649.738 51.5072C651.316 51.5143 652.871 51.0469 654.191 50.1052C659.662 46.2005 660.223 38.3299 662.061 31.242C662.659 28.9341 662.328 25.6128 663.105 23.6939C663.883 21.775 665.438 21.3077 667.795 21.0669C677.959 20.0284 684.288 23.177 690.58 25.0676C707.434 30.1324 737.697 25.5561 743.989 26.4837C750.533 27.4487 757.584 29.3231 764.41 27.914C765.988 27.4396 767.543 26.9723 769.122 26.4979C770.701 26.0235 772.256 25.5561 777 23.6585"
                  stroke="#6883E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 translate-y-[-50%] w-[calc(100%+20px)] animate-wave">
              <svg
                className="w-ful"
                viewBox="0 0 778 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 26.7249C21.3781 22.9383 43.9847 17.8578 63.6362 17.5248C74.3268 17.3437 81.1562 22.2723 90.5783 23.8659C108.967 26.9761 131.213 24.1942 139.57 20.3981C147.602 16.7492 167.222 16.9064 181.004 14.5232C188.378 13.248 194.738 11.8259 201.205 12.6061C208.411 13.4753 217.312 16.5639 225.426 18.3145C233.014 19.9515 239.951 22.5958 263.841 22.7623C270.677 22.81 273.877 21.34 276.565 19.9176C281.593 17.2576 282.483 12.4729 285.721 8.66251C287.595 6.45727 291.639 5.1661 295.127 4.05771C303.579 1.37171 314.229 4.19566 320.696 5.78927C327.158 7.38145 333.606 9.27616 340.073 10.8602C347.844 12.7637 352.983 15.936 361.057 19.7321C368.434 23.2005 375.59 25.1266 382.057 26.7202C388.346 28.2699 398.164 28.6277 406.278 26.5774C414.176 24.5817 419.188 20.712 424.315 17.2251C429.931 13.4056 436.95 11.8259 443.684 10.5558C451.895 9.00688 459.557 8.02031 466.024 6.5932C472.912 5.07319 482.131 3.89122 490.512 4.5239C498.944 5.16051 513.845 2.93981 524.688 3.72948C533.817 4.39437 540.294 4.21469 549.159 2.31188C566.644 -1.44115 577.401 3.89122 590.069 5.47055C599.897 6.69584 632 21 652.786 7.69207C673.572 -5.61585 670.54 8.02031 682.11 7.53985C699.036 6.83695 722.729 8.00128 733.249 9.75186C745.917 11.5024 755.573 12.1304 764.478 12.6108C766.376 12.7678 772.123 13.2388 777 12.6108"
                  stroke="#E790FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 translate-y-[-50%] w-[calc(100%+20px)]  animate-wave">
              <svg
                className="w-ful"
                viewBox="0 0 780 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M778 2C772.8 3.40199 761.286 7.18313 736.208 7.19729C729.161 7.20127 725.141 4.83231 720.436 5.29964C712.482 6.0898 708.38 14.7171 702.623 18.746C693.846 24.8883 675.926 18.5407 669.894 14.5259C663.922 10.5508 658.647 6.72996 652.096 5.07306C644.241 3.08597 638.21 2.94882 635.076 2.47441C631.945 2.00038 628.267 6.22014 624.347 11.8706C616.137 23.7082 618.307 37.3756 615.692 43.0473C614.129 46.4369 609.416 49.1863 600.832 52.0186C571.999 61.5313 562.825 45.4477 556.534 43.0756C553.486 41.9265 550.242 41.185 547.109 40.7106C540.573 39.7213 535.586 47.2887 529.57 52.0257C523.258 56.9952 515.165 44.513 509.408 41.1921C502.171 37.0176 495.278 33.6369 484.557 33.3891C473.433 33.1319 461.285 39.7547 451.295 40.0025C439.313 40.2998 426.161 31.2861 417.003 27.7386C408.759 24.5454 397.917 24.6585 389.505 25.8339C379.641 27.2123 371.181 28.4255 363.586 29.1406C355.816 29.8723 345.545 31.7393 334.023 32.2137C318.93 32.8351 313.594 20.9198 305.732 16.6431C295.853 11.2692 287.926 19.447 279.027 22.9945C271.812 25.8708 264.363 28.4255 257.813 30.316C250.302 32.4839 243.942 32.2208 236.088 29.8629C227.229 27.2032 223.521 19.9569 217.23 17.5848C210.314 14.9773 201.529 17.0962 195.238 20.1622C189.326 23.0435 181.642 26.0463 174.558 30.309C166.748 35.008 159.116 39.2732 152.825 43.0544C146.534 46.8355 140.266 49.6678 133.975 51.5584C132.396 52.0328 130.841 52.5001 129.262 52.5072C127.684 52.5143 126.129 52.0469 124.809 51.1052C119.338 47.2005 118.777 39.3299 116.939 32.242C116.341 29.9341 116.672 26.6128 115.895 24.6939C115.117 22.775 113.562 22.3077 111.205 22.0669C101.041 21.0284 94.7116 24.177 88.4203 26.0676C71.5661 31.1324 41.3026 26.5561 35.0114 27.4837C28.4668 28.4487 21.4157 30.3231 14.5903 28.914C13.0116 28.4396 11.4565 27.9723 9.87781 27.4979C8.29911 27.0235 6.74399 26.5561 2.00002 24.6585"
                  stroke="#6883E9"
                  strokeOpacity="0.2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </>
        )}
        <div className="w-[160px] h-[160px] rounded-full bg-white grid place-items-center relative">
          <div
            className={`w-[130px] h-[130px] rounded-full bg-[#EFECFF] grid place-items-center ${
              isRecording || showTranscription ? "animate-pulse-scale" : ""
            }`}
          >
            <Image src={roundIcon} alt="Icon" width={93} height={93} />
          </div>
        </div>

        {showTranscription && transcribedText ? (
          <div className="absolute bottom-8 left-1/2 translate-x-[-50%] w-full px-5">
            <p className="text-[#375DFB] font-medium text-lg text-center">
              {transcribedText}
            </p>
          </div>
        ) : (
          <p className="absolute bottom-8 left-1/2 translate-x-[-50%] text-[#525866] font-medium text-base">
            {formatTime(time)}
          </p>
        )}
      </div>

      <div className="mt-10 w-full flex items-center justify-center gap-4 flex-wrap">
        <LeaveButton onClick={() => router.back()} />
        {!isRecording && isPaused && (
          <SoundCheckButton onClick={playRecording} />
        )}
        {!isRecording && !isPaused && <GoLiveButton onClick={startRecording} />}
        {isPaused && <GoLiveButton onClick={startRecording} />}
        {isRecording && <PauseButton onClick={stopRecording} />}
      </div>
    </div>
  );
}
