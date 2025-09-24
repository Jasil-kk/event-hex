"use client";

import PlayIcon from "@/public/icons/PlayIcon";
import CrossIcon from "@icons/CrossIcon";
import SoundCheckIcon from "@icons/SoundCheckIcon";
import roundIcon from "@images/png/round-icon.png";
import Image from "next/image";
import sessions from "@/data/sessions.json";
import PauseIcon from "@/public/icons/PauseIcon";
import LeaveButton from "./components/LeaveButton";
import SoundCheckButton from "./components/SoundCheckButton";
import GoLiveButton from "./components/GoLiveButton";
import PauseButton from "./components/PauseButton";

interface Props {
  sessionId: string | number;
}

export default function Golive({ sessionId }: Props) {
  const sessionNumber =
    typeof sessionId === "string" ? parseInt(sessionId) : sessionId;

  const session = sessions.find((s) => s.id === sessionNumber);

  if (!session) {
    return (
      <div className="w-full flex justify-center items-center h-[400px] text-center text-[#525866] font-medium">
        Session not found
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <div className="mt-5">
        <div>
          <h2 className="text-[#0A0D14] font-medium text-[22px]">
            {session.title}
          </h2>
          <p className="text-[#525866] font-medium text-sm">
            {session.date} | {session.time}
          </p>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(107.76deg, #C2D6FF -8.64%, #FFFFFF 71.51%)",
        }}
        className="mx-auto mt-5 w-full max-w-[776px] h-[464px] rounded-[50px] border border-[#E2E4E9] flex items-center justify-center relative"
      >
        <div className="w-[160px] h-[160px] rounded-full bg-[#EFECFF] grid place-items-center border-[15px] border-white">
          <Image src={roundIcon} alt="Icon" width={93} height={93} />
        </div>

        <p className="absolute bottom-8 left-1/2 translate-x-[-50%] text-[#525866] font-medium text-base">
          00:00:48
        </p>
      </div>
      <div className="mt-10 w-full flex items-center justify-center gap-4 flex-wrap">
        <LeaveButton />
        <SoundCheckButton />
        <GoLiveButton />
        <PauseButton />
      </div>
    </div>
  );
}
