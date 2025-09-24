"use client";

import ClockIcon from "@icons/ClockIcon";
import DashboardIcon from "@icons/DashboardIcon";
import { useRouter } from "next/navigation";
import RoundTickIcon from "@icons/RoundTickIcon";

type sessionData = {
  id: number;
  title: string;
  date: string;
  time: string;
  eventName: string;
  status: string;
};

interface TableProps {
  data: sessionData[];
}

export default function Table({ data }: TableProps) {
  const router = useRouter();

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[800px] border border-[#E2E4E9] rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#F6F8FA] h-[39px]">
            <tr className="text-[#525866] text-sm font-normal">
              <th className="px-3 font-normal">Session</th>
              <th className="px-3 font-normal">Event Name</th>
              <th className="px-3 font-normal">Status</th>
              <th className="px-3"></th>
            </tr>
          </thead>
          <tbody className="font-medium text-[#525866] text-sm text-left">
            {data && data.length > 0 ? (
              data?.map((item) => (
                <tr key={item.id} className="border-b border-[#E2E4E9]">
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-3">
                      <div className="border border-[#CDD0D5] rounded-lg w-8 h-8 grid place-items-center">
                        <DashboardIcon />
                      </div>
                      <div className="px-3">
                        <h3 className="font-medium text-[#0A0D14] text-base">
                          {item.title || ""}
                        </h3>
                        <p>
                          {item.date} | {item.time}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3">{item.eventName}</td>
                  <td className="px-3">
                    {item.status === "Pending" ? (
                      <div className="bg-[#FEF3EB] rounded-md w-fit py-1.5 px-2 flex items-center gap-1 text-[#F17B2C] text-xs">
                        <ClockIcon /> Pending
                      </div>
                    ) : (
                      <div className="bg-[#EFFAF6] rounded-md w-fit py-1.5 px-2 flex items-center gap-1 text-[#38C793] text-xs">
                        <RoundTickIcon /> Processed
                      </div>
                    )}
                  </td>
                  <td className="px-3">
                    {item.status === "Pending" ? (
                      <button
                        onClick={() => router.push(`/golive/${item.id}`)}
                        className="w-32 h-8 cursor-pointer rounded-lg text-white bg-[#375DFB] hover:bg-[#2b51e9] transition-all"
                      >
                        Start Recording
                      </button>
                    ) : (
                      <button
                        onClick={() => router.push(`/golive/${item.id}`)}
                        className="w-32 h-8 cursor-pointer rounded-lg text-[#375DFB] bg-[#EBF1FF] hover:bg-[#d8e0f1] transition-all"
                      >
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-6 text-center text-[#525866] text-sm font-normal"
                >
                  No session data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
