import { motion } from "framer-motion";

export default function CompassModel() {
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      {/* Outer glow rings */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "280px",
          height: "280px",
          border: "1px solid rgba(194,103,42,0.2)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "240px",
          height: "240px",
          border: "1px solid rgba(194,103,42,0.1)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main compass body */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          width: "200px",
          height: "200px",
        }}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Compass face */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 35%, #6b4020, #2a1000)",
            border: "3px solid #c9942a",
            boxShadow:
              "0 0 30px rgba(194,103,42,0.4), inset 0 0 20px rgba(0,0,0,0.5)",
          }}
        />

        {/* Cardinal directions */}
        {[
          { label: "N", angle: 0, color: "#c2672a" },
          { label: "E", angle: 90, color: "#d4b896" },
          { label: "S", angle: 180, color: "#d4b896" },
          { label: "W", angle: 270, color: "#d4b896" },
        ].map(({ label, angle, color }) => (
          <div
            key={label}
            className="absolute text-xs font-black"
            style={{
              fontFamily: "'Chinese Rocks Rg', serif",
              color,
              transform: `rotate(${angle}deg) translateY(-72px) rotate(-${angle}deg)`,
              fontSize: "11px",
            }}
          >
            {label}
          </div>
        ))}

        {/* Tick marks */}
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: i % 4 === 0 ? "2px" : "1px",
              height: i % 4 === 0 ? "10px" : "6px",
              background:
                i % 4 === 0 ? "rgba(201,148,42,0.8)" : "rgba(194,103,42,0.4)",
              transform: `rotate(${(i / 32) * 360}deg) translateY(-80px)`,
              transformOrigin: "center bottom",
            }}
          />
        ))}

        {/* North needle */}
        <motion.div
          className="absolute"
          style={{
            width: "4px",
            height: "60px",
            background:
              "linear-gradient(to top, transparent 10%, #c2672a 100%)",
            borderRadius: "2px 2px 0 0",
            transformOrigin: "bottom center",
            top: "calc(50% - 60px)",
            left: "calc(50% - 2px)",
          }}
          animate={{ rotate: [0, 8, -5, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* South needle */}
        <motion.div
          className="absolute"
          style={{
            width: "4px",
            height: "50px",
            background:
              "linear-gradient(to bottom, transparent 10%, #d4b896 100%)",
            borderRadius: "0 0 2px 2px",
            transformOrigin: "top center",
            top: "50%",
            left: "calc(50% - 2px)",
          }}
          animate={{ rotate: [0, 8, -5, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center pin */}
        <div
          className="absolute w-4 h-4 rounded-full z-10"
          style={{
            background: "radial-gradient(circle at 40% 40%, #f0c060, #c9942a)",
            border: "1px solid #c2672a",
            boxShadow: "0 0 8px rgba(201,148,42,0.6)",
          }}
        />
      </motion.div>

      {/* Floating glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(194,103,42,0.1) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
