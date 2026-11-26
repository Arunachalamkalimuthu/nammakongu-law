// Initials for an advocate's avatar: "P. Kalimuthu" -> "PK".
// Placeholder names ("[Advocate name]") fall back to the firm's initials.
export const initials = (name: string) =>
  name.startsWith('[')
    ? 'KL'
    : name
        .replace(/^(adv\.?|advocate)\s+/i, '')
        .split(/\s+/)
        .filter((w) => /^[A-Za-z]/.test(w))
        .slice(0, 2)
        .map((w) => w[0].toUpperCase())
        .join('');
