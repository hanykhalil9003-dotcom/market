import { TICKER_KEYWORDS } from '@/lib/keywords';

export default function KeywordTicker() {
  return (
    <div
      role="marquee"
      aria-label="كلمات مفتاحية عن إعلانات جوجل"
      className="fixed inset-x-0 top-0 z-[60] flex h-10 items-center overflow-hidden border-b border-cyan-300/20 bg-[#030712] text-sm font-semibold text-cyan-200"
    >
      <div className="animate-marquee flex w-max shrink-0 items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-8 pe-8"
          >
            {TICKER_KEYWORDS.map((keyword) => (
              <span key={`${copy}-${keyword}`} className="flex items-center gap-8 whitespace-nowrap">
                {keyword}
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
