'use client';
import React from 'react';
import { useSectionInView } from '../../lib/hooks';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../../lib/data';
import { useInView } from 'react-intersection-observer';
import { useThemeContext } from '../../context/theme-context';
import { motion } from 'framer-motion';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useThemeContext();
  return (
    <motion.section
      ref={ref}
      id="experience"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                dateClassName="experienceDate"
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : 'rgba(255, 255, 255, 0.5) solid 0.4rem',
                }}
                visible={inView}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                  border: 'none',
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </motion.section>
  );
}
