import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techStack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = (null as Feedback) || null;
  const normalizeType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now(),
  ).format("MMM D , YYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full mn-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-b-lg bg-light-600">
            <p className="badge-text">{normalizeType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="cover image"
            width={90}
            height={90}
            className="rounded-full object-fit"
          />
        </div>
      </div>
    </div>
  );
};
export default InterviewCard;
