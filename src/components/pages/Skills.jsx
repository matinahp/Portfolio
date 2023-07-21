import { devSkills } from "../../constants/skills";
import Skill from "./Skill";
import { useState, useEffect } from "react";

const Skills = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [bootstrap, setBootstrap] = useState(0);
  const [sass, setSass] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [react, setReact] = useState(0);
  const [git, setGit] = useState(0);
  const [github, setGithub] = useState(0);

  const {
    htmlSkill,
    cssSkill,
    bootstrapSkill,
    sassSkill,
    jsSkill,
    reactSkill,
    gitSkill,
    githubSkill,
  } = devSkills;

  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });

      setBootstrap((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });

      setSass((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });

      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });

      setReact((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 50);
      });

      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });

      setGithub((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={bootstrapSkill.name}
        icon={bootstrapSkill.icon}
        color={bootstrapSkill.color}
        value={bootstrap}
      />
      <Skill
        name={sassSkill.name}
        icon={sassSkill.icon}
        color={sassSkill.color}
        value={sass}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javascript}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={react}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />
      <Skill
        name={githubSkill.name}
        icon={githubSkill.icon}
        color={githubSkill.color}
        value={github}
      />
    </>
  );
};

export default Skills;
