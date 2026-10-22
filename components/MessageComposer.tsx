"use client";
import { useRef, useState } from "react";
import { charities } from "@/data/charities";
import { siteUrl } from "@/lib/site";
import Icon from "./Icon";
import { copyMessage, shareMessage, type ShareOutcome } from "@/lib/sharing";
function makeMessage(id: string) {
  const c = charities.find((c) => c.id === id);
  return `Your company is the best birthday gift. If you’d like to give something too, I’d love you to consider ${c ? `supporting ${c.name}` : "a cause you care about"} instead of buying me a present.\n\n${c ? `${c.actionType === "Gift membership" ? "You can explore its gift memberships" : c.actionType === "Certificate shop" ? "You can explore its plastic certificates" : c.actionType === "Official website" ? "You can learn more and choose how to help" : "You can give directly"} on its own website: ${c.url}` : `You can find ideas at ${siteUrl} and give on the organisation’s own website.`}\n\nThere’s no pressure to give — I’m just happy to celebrate with you.`;
}
export default function MessageComposer() {
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState(makeMessage(""));
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const field = useRef<HTMLTextAreaElement>(null);
  function selectText() {
    field.current?.focus();
    field.current?.select();
    setStatus(
      "Text selected. Use your device’s Copy command, then paste it wherever you like.",
    );
  }
  function showOutcome(outcome: ShareOutcome) {
    if (outcome === 'select') selectText();
    setStatus({
      copied: 'Copied. Paste it into your invitation or a message when you’re ready.',
      shared: 'Share sheet closed. This guide does not track whether a message was sent.',
      cancelled: 'Sharing cancelled. Your message is still here.',
      select: 'Automatic sharing or copying is unavailable. Your text is selected; use your device’s Copy command.',
    }[outcome]);
  }
  async function copy() {
    setBusy(true);
    showOutcome(await copyMessage(message, navigator));
    setBusy(false);
  }
  async function share() {
    setStatus("Choose an app in your device’s share sheet. You can also select and copy the text manually.");
    setBusy(true);
    showOutcome(await shareMessage(message, navigator));
    setBusy(false);
  }
  return (
    <div className="composer">
      <div className="composer-controls">
        <label htmlFor="organisation">
          Start with an organisation{" "}
          <span className="optional">(optional)</span>
        </label>
        <select
          id="organisation"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
        >
          <option value="">Let friends choose a cause</option>
          {charities.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} · {c.actionType}
            </option>
          ))}
        </select>
        <p className="small">Using a new starter replaces the text below.</p>
        <button
          type="button"
          className="button button-secondary"
          onClick={() => {
            setMessage(makeMessage(organisation));
            setStatus("Starter added. Edit it to sound like you.");
          }}
        >
          Use this starter <Icon name="arrow" />
        </button>
      </div>
      <div className="message-editor">
        <div className="editor-label">
          <label htmlFor="birthday-message">Your message</label>
          <span>Edit freely</span>
        </div>
        <textarea
          ref={field}
          id="birthday-message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus("");
          }}
          rows={10}
          aria-describedby="message-privacy"
          spellCheck
        />
        <p id="message-privacy" className="small">
          Your draft stays in this page’s memory and clears when you reload.
          Nothing is sent until you use your own messaging app.
        </p>
        <div className="composer-actions">
          <button
            className="button"
            disabled={!message.trim() || busy}
            onClick={copy}
          >
            <Icon name="copy" />
            Copy message
          </button>
          <button
            className="button button-secondary"
            disabled={!message.trim() || busy}
            onClick={share}
          >
            Share message <Icon name="external" />
          </button>
          <button
            className="text-button"
            onClick={selectText}
            disabled={!message.trim()}
          >
            Select text
          </button>
        </div>
        <p className="message-status" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </div>
  );
}
