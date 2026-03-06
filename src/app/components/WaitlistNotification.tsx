import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, X } from "lucide-react";

const firstNames = [
  "Muhammad", "Sara", "Usman", "Fatima", "Bilal", "Ayesha", "Hassan",
  "Zainab", "Omar", "Mariam", "Ali", "Noor", "Kamran", "Hira",
  "Ahmad", "Sana", "Yaser", "Amina", "Tariq", "Rabia",
];

const cities = [
  "Islamabad", "Lahore", "Karachi", "Rawalpindi", "Faisalabad",
  "Dubai", "Riyadh", "Jeddah", "Multan", "Sialkot","Abu Dhabi", "Madina", "Sharjah",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTimeAgo(): string {
  const mins = Math.floor(Math.random() * 12) + 1;
  return `${mins} min ago`;
}

export function WaitlistNotification() {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({ name: "", city: "", time: "" });
  const shownCount = useRef(0);
  const pageStartTime = useRef(Date.now());
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [waitlistCount, setWaitlistCount] = useState(() => {
    try {
      const stored = localStorage.getItem("ve_waitlist_count");
      return stored ? parseInt(stored) : 214;
    } catch {
      return 214;
    }
  });

  // Determine the max notifications allowed based on time spent on page
  const getMaxAllowed = useCallback(() => {
    const minutesOnPage = (Date.now() - pageStartTime.current) / 60000;
    if (minutesOnPage < 2) return 1;
    if (minutesOnPage < 10) return 2;
    if (minutesOnPage < 20) return 3;
    if (minutesOnPage < 30) return 4;
    return 5;
  }, []);

  const showNotification = useCallback(() => {
    if (shownCount.current >= getMaxAllowed()) return;
    shownCount.current += 1;

    setNotification({
      name: getRandomItem(firstNames),
      city: getRandomItem(cities),
      time: getTimeAgo(),
    });
    setVisible(true);

    // Auto-hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    timersRef.current.push(hideTimer);
  }, [getMaxAllowed]);

  useEffect(() => {
    // Schedule notifications at specific intervals (in seconds):
    // 1st: after 8s, 2nd: at ~2.5 min, 3rd: at ~10 min,
    // 4th: at ~22 min, 5th: at ~32 min
    const scheduleDelays = [
      8 * 1000,          // 8 seconds
      150 * 1000,        // 2.5 minutes
      600 * 1000,        // 10 minutes
      1320 * 1000,       // 22 minutes
      1920 * 1000,       // 32 minutes
    ];

    scheduleDelays.forEach((delay) => {
      const timer = setTimeout(() => {
        showNotification();
      }, delay);
      timersRef.current.push(timer);
    });

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [showNotification]);

  // Listen for waitlist count changes from WaitlistCTA
  useEffect(() => {
    const handleStorage = () => {
      try {
        const stored = localStorage.getItem("ve_waitlist_count");
        if (stored) setWaitlistCount(parseInt(stored));
      } catch {
        // ignore
      }
    };
    window.addEventListener("storage", handleStorage);

    // Also poll for same-tab updates
    const poll = setInterval(() => {
      try {
        const stored = localStorage.getItem("ve_waitlist_count");
        if (stored && parseInt(stored) !== waitlistCount) {
          setWaitlistCount(parseInt(stored));
        }
      } catch {
        // ignore
      }
    }, 2000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(poll);
    };
  }, [waitlistCount]);

  return (
    <>
      {/* Floating waitlist counter - bottom right */}
      <div
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-2.5"
        style={{
          display: "none",
          backgroundColor: "#0f172a",
          border: "1px solid rgba(26,142,233,0.2)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        }}
      >
        <div
          className="flex h-8 w-8 items-center justify-center"
          style={{ backgroundColor: "rgba(26,142,233,0.12)" }}
        >
          <Users size={15} color="#1a8ee9" />
        </div>
        <div>
          <p
            className="text-[15px] text-white"
            style={{ fontWeight: 600, lineHeight: 1.2 }}
          >
            {waitlistCount}+
          </p>
          <p
            className="text-[10px]"
            style={{ color: "#64748b", lineHeight: 1.2 }}
          >
            on the waitlist
          </p>
        </div>
      </div>

      {/* Toast notification - bottom left */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 60, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-5 left-5 z-50 flex max-w-[340px] items-center gap-3 px-4 py-3.5"
            style={{
              backgroundColor: "#0f172a",
              border: "1px solid rgba(26,142,233,0.2)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
          >
            {/* Avatar */}
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] text-white"
              style={{
                backgroundColor: "#1a8ee9",
                fontWeight: 600,
              }}
            >
              {notification.name.charAt(0)}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p
                className="text-[13px] text-white"
                style={{ fontWeight: 600, lineHeight: 1.4 }}
              >
                {notification.name} from {notification.city}
              </p>
              <p
                className="text-[12px]"
                style={{ color: "#64748b", lineHeight: 1.4 }}
              >
                just joined the waitlist
              </p>
            </div>

            {/* Time + close */}
            <div className="flex shrink-0 flex-col items-end gap-1">
              <button
                onClick={() => setVisible(false)}
                className="cursor-pointer p-0.5"
                style={{ background: "none", border: "none" }}
              >
                <X size={12} color="#64748b" />
              </button>
              <span
                className="text-[10px]"
                style={{ color: "#64748b" }}
              >
                {notification.time}
              </span>
            </div>

            {/* Bottom progress bar that shrinks over 4s */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px]"
              style={{ backgroundColor: "#1a8ee9" }}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}