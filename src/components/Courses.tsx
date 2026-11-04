import { ArrowLeft, BookOpen, CheckCircle2, GraduationCap } from 'lucide-react';
import { COURSES } from '@/lib/keywords';
import { trackEvent } from '@/lib/tracking';

export default function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">دورات تدريبية</p>
            <h2 id="courses-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              دورات تدريبية في إعلانات جوجل للمبتدئين والمحترفين
            </h2>
          </div>
          <p className="leading-[1.5] text-slate-400 lg:col-span-5">
            تعلّم إدارة حملات جوجل الإعلانية بطريقة عملية، من إعداد الحساب حتى قياس العائد، وطبّق ما تتعلمه على
            نشاطك التجاري مباشرة.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {COURSES.map((course) => (
            <li key={course.title}>
              <article className="glass-card flex h-full flex-col p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">{course.title}</h3>
                <p className="mt-3 leading-[1.5] text-slate-400">{course.description}</p>

                <ul className="mt-6 grid gap-3">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => trackEvent('course_interest_click', { course: course.title })}
                  className="btn-ghost mt-8 w-full"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  سجّل اهتمامك
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
