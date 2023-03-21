export default function () {
  const t =
    "\n   display: inline-block;\n          font-size: 12px;\n  font-weight: normal;\n         background: #F3F1EB;\n          color: #212121;\n          padding: 6px; 9px\n    border-right: 1px solid #EA5A2A;\n      border-left: 1px solid #FFC161;\n      border-top: 1px solid #4DB072;\n      border-bottom: 1px solid #648CFF;\n     ";
  let n = "\n\n";
  (n += "→ Data\n"),
    (n += "→ Strategy\n"),
    (n += "→ Design\n"),
    (n += "→ Development\n"),
    (n += "\n\n"),
    (n += "Work with us: https://thebeyondgroup.la/\n\n"),
    console.group("%cBuilt by The Beyond Group.", t),
    console.log(`%c${n}`, "font-size: 12px;"),
    console.groupEnd();
}
