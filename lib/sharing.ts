export type ShareOutcome = 'copied' | 'shared' | 'cancelled' | 'select';
export interface SharingApi {
  clipboard?: { writeText(text: string): Promise<void> };
  share?: (data: { title: string; text: string }) => Promise<void>;
}
export async function copyMessage(text: string, api: SharingApi): Promise<ShareOutcome> {
  try {
    if (!api.clipboard?.writeText) return 'select';
    await api.clipboard.writeText(text);
    return 'copied';
  } catch { return 'select'; }
}
export async function shareMessage(text: string, api: SharingApi): Promise<ShareOutcome> {
  if (!api.share) return copyMessage(text, api);
  try {
    await api.share({ title: 'A birthday thought', text });
    return 'shared';
  } catch (error) {
    return error instanceof Error && error.name === 'AbortError' ? 'cancelled' : 'select';
  }
}
