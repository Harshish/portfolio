import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useObjectControls } from "@/store/controls";
import clsx from "clsx";

export default function AnimatedContainer({
  classes = "",
  contentId,
  children,
}: {
  classes?: string;
  contentId: number;
  children: React.ReactNode;
}) {
  const ctx = useObjectControls();
  const content = !ctx || ctx.nearContent === null ? -1 : ctx.nearContent;

  const containerClasses = clsx(
    "p-4 bg-gray-800 flex absolute rounded-xl",
    classes,
  );

  return (
    <AnimatePresence>
      {content === contentId ? (
        <motion.section
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className={containerClasses}
        >
          {children}
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
