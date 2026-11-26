// Office hours the way people say them: '09:00' -> '9 AM' (English) or 'காலை 9' (Tamil).
export const hour = (t: string, ta = false) => {
  const [hh, mm] = t.split(':').map(Number);
  const h12 = hh % 12 || 12;
  const m = mm ? `.${String(mm).padStart(2, '0')}` : '';
  if (!ta) return `${h12}${m} ${hh < 12 ? 'AM' : 'PM'}`;
  const part = hh < 12 ? 'காலை' : hh < 16 ? 'மதியம்' : hh < 19 ? 'மாலை' : 'இரவு';
  return `${part} ${h12}${m}`;
};

type Hours = { days: string; daysTa: string; opens: string; closes: string };

// "Monday to Sunday, 9 AM to 9 PM" / "திங்கள் முதல் ஞாயிறு வரை, காலை 9 முதல் இரவு 9 வரை"
export const hoursText = (h: Hours, ta = false) =>
  ta
    ? `${h.daysTa}, ${hour(h.opens, true)} முதல் ${hour(h.closes, true)} வரை`
    : `${h.days}, ${hour(h.opens)} to ${hour(h.closes)}`;
