"use client";
import { useEffect, useMemo, useState } from "react";
import { FileCode2 } from "lucide-react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

const KEY = "text-violet-300";
const STRING = "text-emerald-300";
const NUMBER = "text-amber-200";
const PROP = "text-gold-200";
const PUNCT = "text-slate-500";
const PLAIN = "text-ivory/85";
const COMMENT = "text-mist/60 italic";

const files = [
  {
    name: "developer.js",
    label: "developer.js",
    lines: [
      [{ t: "// building with intent", c: COMMENT }],
      [
        { t: "const", c: KEY },
        { t: " developer ", c: PLAIN },
        { t: "= {", c: PUNCT },
      ],
      [
        { t: "  name", c: PROP },
        { t: ": ", c: PUNCT },
        { t: '"Godstime Moses"', c: STRING },
        { t: ",", c: PUNCT },
      ],
      [
        { t: "  role", c: PROP },
        { t: ": ", c: PUNCT },
        { t: '"Full Stack & Mobile App Developer"', c: STRING },
        { t: ",", c: PUNCT },
      ],
      [
        { t: "  location", c: PROP },
        { t: ": ", c: PUNCT },
        { t: '"Lagos, Nigeria"', c: STRING },
        { t: ",", c: PUNCT },
      ],
      [
        { t: "  experience", c: PROP },
        { t: ": ", c: PUNCT },
        { t: '"2+ years"', c: STRING },
        { t: ",", c: PUNCT },
      ],
      [
        { t: "  stack", c: PROP },
        { t: ": [", c: PUNCT },
        { t: '"React"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"Next.js"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"Python"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"FastAPI"', c: STRING },
        { t: "],", c: PUNCT },
      ],
      [
        { t: "  strengths", c: PROP },
        { t: ": [", c: PUNCT },
        { t: '"Responsive UI"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"Clean code"', c: STRING },
        { t: "],", c: PUNCT },
      ],
      [
        { t: "  availability", c: PROP },
        { t: ": ", c: PUNCT },
        { t: "true", c: NUMBER },
        { t: ",", c: PUNCT },
      ],
      [{ t: "};", c: PUNCT }],
      [],
      [
        { t: "export default", c: KEY },
        { t: " developer", c: PLAIN },
        { t: ";", c: PUNCT },
      ],
    ],
  },
  {
    name: "stack.json",
    label: "stack.json",
    lines: [
      [{ t: "{", c: PUNCT }],
      [
        { t: '  "frontend"', c: PROP },
        { t: ": [", c: PUNCT },
        { t: '"React"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"Next.js"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"Tailwind CSS"', c: STRING },
        { t: "],", c: PUNCT },
      ],
      [
        { t: '  "backend"', c: PROP },
        { t: ": [", c: PUNCT },
        { t: '"Python"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"FastAPI"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"REST APIs"', c: STRING },
        { t: "],", c: PUNCT },
      ],
      [
        { t: '  "database"', c: PROP },
        { t: ": [", c: PUNCT },
        { t: '"Cassandra"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"Firebase"', c: STRING },
        { t: "],", c: PUNCT },
      ],
      [
        { t: '  "mobile"', c: PROP },
        { t: ": [", c: PUNCT },
        { t: '"React Native"', c: STRING },
        { t: "],", c: PUNCT },
      ],
      [
        { t: '  "tools"', c: PROP },
        { t: ": [", c: PUNCT },
        { t: '"Git"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"GitHub"', c: STRING },
        { t: ", ", c: PUNCT },
        { t: '"WordPress"', c: STRING },
        { t: "]", c: PUNCT },
      ],
      [{ t: "}", c: PUNCT }],
    ],
  },
];

function typeSpeed() {
  return 22;
}

export default function CodeShowcase() {
  const reduceMotion = usePrefersReducedMotion();
  const [activeFile, setActiveFile] = useState(0);
  const [typing, setTyping] = useState({ file: 0, chars: 0 });

  const active = files[activeFile];

  const rows = useMemo(() => {
    return active.lines.reduce(
      (accumulator, line) => {
        const length = line.reduce(
          (sum, segment) => sum + segment.t.length,
          0
        );
        const start = accumulator.total;

        return {
          rows: [
            ...accumulator.rows,
            { line, start, end: start + length },
          ],
          total: start + length,
        };
      },
      { rows: [], total: 0 }
    ).rows;
  }, [active]);

  const totalChars = rows.length ? rows[rows.length - 1].end : 0;
  const visibleChars = typing.file === activeFile ? typing.chars : 0;
  const shownChars = reduceMotion ? totalChars : visibleChars;
  const complete = shownChars >= totalChars;

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setTyping((current) => {
        const base = current.file === activeFile ? current.chars : 0;

        if (base >= totalChars) {
          window.clearInterval(interval);
          return { file: activeFile, chars: totalChars };
        }

        return { file: activeFile, chars: base + 1 };
      });
    }, typeSpeed());

    return () => window.clearInterval(interval);
  }, [activeFile, totalChars, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || visibleChars < totalChars) return;

    const timer = window.setTimeout(() => {
      setActiveFile((current) => (current + 1) % files.length);
    }, 4200);

    return () => window.clearTimeout(timer);
  }, [visibleChars, totalChars, reduceMotion]);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_30%_0%,rgba(212,175,55,0.14),transparent_65%)]"
        aria-hidden="true"
      />

      <p className="sr-only">
        Godstime Moses is a full stack and mobile app developer with two plus
        years of experience. Core skills include React, Next.js, JavaScript,
        React Native, WordPress, Tailwind CSS, Python, FastAPI, REST APIs,
        Cassandra, Firebase, Git and GitHub.
      </p>

      <div className="glass-strong relative overflow-hidden rounded-2xl sm:rounded-3xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

          <span className="ml-2 flex min-w-0 items-center gap-1.5 font-mono text-[11px] text-mist sm:text-xs">
            <FileCode2 size={13} className="shrink-0 text-gold-300/80" />
            <span className="truncate">{active.name}</span>
          </span>

          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mist/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {complete ? "ready" : "typing"}
          </span>
        </div>

        <div className="flex gap-1 overflow-x-auto border-b border-white/10 bg-ink-950/40 px-3 py-2">
          {files.map((file, index) => (
            <button
              key={file.name}
              type="button"
              onClick={() => setActiveFile(index)}
              aria-pressed={activeFile === index}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 font-mono text-[11px] transition-colors sm:text-xs ${
                activeFile === index
                  ? "bg-white/10 text-gold-200"
                  : "text-mist/70 hover:bg-white/5 hover:text-ivory"
              }`}
            >
              {file.label}
            </button>
          ))}
        </div>

        <div
          className="min-h-[19rem] overflow-x-auto px-3 py-4 sm:min-h-[21rem] sm:px-5 sm:py-5"
          aria-hidden="true"
        >
          <pre className="font-mono text-[11px] leading-6 sm:text-[13px] sm:leading-7">
            <code>
              {rows.map((row, rowIndex) => {
                let offset = row.start;

                return (
                  <span key={rowIndex} className="flex min-w-max">
                    <span className="w-6 shrink-0 select-none pr-2 text-right text-mist/25 sm:w-8 sm:pr-3">
                      {rowIndex + 1}
                    </span>

                    <span className="pr-3">
                      {row.line.length === 0 ? (
                        <span className="inline-block h-6" />
                      ) : (
                        row.line.map((segment, segmentIndex) => {
                          const start = offset;
                          const end = offset + segment.t.length;
                          offset = end;

                          const reveal = Math.max(
                            0,
                            Math.min(segment.t.length, shownChars - start)
                          );
                          const isLastSegment =
                            rowIndex === rows.length - 1 &&
                            segmentIndex === row.line.length - 1;
                          const showCaret = complete
                            ? isLastSegment
                            : shownChars > start && shownChars <= end;

                          return (
                            <span key={segmentIndex} className={segment.c}>
                              {segment.t.slice(0, reveal)}
                              {showCaret && (
                                <span
                                  className={`caret ml-0.5 ${complete ? "opacity-60" : ""}`}
                                />
                              )}
                              {reveal < segment.t.length && (
                                <span className="invisible">
                                  {segment.t.slice(reveal)}
                                </span>
                              )}
                            </span>
                          );
                        })
                      )}
                    </span>
                  </span>
                );
              })}
            </code>
          </pre>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mist/60">
          <span>UTF-8</span>
          <span className="hidden sm:inline">clean code · tested · shipped</span>
          <span>{active.name.endsWith(".json") ? "JSON" : "JavaScript"}</span>
        </div>
      </div>
    </div>
  );
}
