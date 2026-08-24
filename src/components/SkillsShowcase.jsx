import { useLayoutEffect, useRef, useState } from "react";
import { skills } from "../data/skills";
import { skillCardBase } from "../lib/styles";

const PILL_OVERLAY = 3;

export default function SkillsShowcase() {
  const [activeId, setActiveId] = useState("frontend");
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const tabListRef = useRef(null);
  const tabRefs = useRef({});
  const activeCategory = skills.find((skill) => skill.id === activeId) ?? skills[0];

  useLayoutEffect(() => {
    const tabList = tabListRef.current;
    const activeTab = tabRefs.current[activeId];
    if (!tabList || !activeTab) return;

    const updateIndicator = () => {
      const count = skills.length;
      const styles = getComputedStyle(tabList);
      const paddingLeft = 0;
      const paddingRight = 0;
      const available = tabList.clientWidth - paddingLeft - paddingRight;
      const slotWidth = available / count;
      const index = Math.max(
        0,
        skills.findIndex((skill) => skill.id === activeId),
      );

      setIndicator({
        left: paddingLeft + index * slotWidth,
        top: -PILL_OVERLAY,
        width: slotWidth,
        height: tabList.offsetHeight + PILL_OVERLAY * 2,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(tabList);
    resizeObserver.observe(activeTab);
    tabList.addEventListener("scroll", updateIndicator, { passive: true });
    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      tabList.removeEventListener("scroll", updateIndicator);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeId]);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 overflow-x-auto py-3">
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Categorías de skills"
          className="relative flex h-12 items-center overflow-visible rounded-full border border-stone-300 bg-sky-300/80 px-1"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute z-[1] rounded-full border border-stone-300 bg-gradient-to-b from-white to-sky-500 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.10)] transition-[left,top,width,height] duration-300 ease-out motion-reduce:transition-none"
            style={{
              left: indicator.left,
              top: indicator.top,
              width: indicator.width,
              height: indicator.height,
              opacity: indicator.width ? 1 : 0,
            }}
          />
          {skills.map((category) => {
            const isActive = category.id === activeId;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`skill-tab-${category.id}`}
                ref={(node) => {
                  tabRefs.current[category.id] = node;
                }}
                aria-selected={isActive}
                aria-controls={`skill-panel-${category.id}`}
                data-state={isActive ? "active" : "inactive"}
                data-slot="skill-tab"
                className="relative z-10 flex h-full flex-1 items-center justify-center whitespace-nowrap rounded-full px-2 text-black transition-colors duration-300 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white data-[state=active]:font-semibold data-[state=active]:text-sky-900"
                onClick={() => setActiveId(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`skill-panel-${activeCategory.id}`}
        aria-labelledby={`skill-tab-${activeCategory.id}`}
        data-slot="skill-panel"
        className={skillCardBase}
      >
        <h2 className="mb-8 text-center text-xl md:text-2xl">{activeCategory.title}</h2>
        <ul className="flex flex-wrap items-start justify-center gap-8">
          {activeCategory.items.map((item) => (
            <li key={item.name} className="flex w-24 flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-full bg-black p-2">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    className="size-10 object-contain"
                  />
                ) : null}
              </div>
              <span className="text-center text-sm font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
