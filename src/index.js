export default function () {
  const t = `display: inline-block;
    font-size: 12px;
    font-weight: 500;
    background: #F3F1EB;
    color: #212121;
    padding: 6px 9px;
    border-right: 2px solid #EA5A2A;
    border-left: 2px solid #FFC161;
    border-top: 2px solid #4DB072;
    border-bottom: 2px solid #648CFF;`;
  let n = "\n";
  (n += "→ Data\n"),
    (n += "→ Strategy\n"),
    (n += "→ Design\n"),
    (n += "→ Development\n"),
    (n += "\n\n"),
    (n += "Work with us: https://thebeyondgroup.la/\n\n"),
    console.group("%cBuilt by The Beyond Group.", t),
    console.log(`%c${n}`, "font-size: 12px; line-height: 1.5;"),
    console.groupEnd();
}
