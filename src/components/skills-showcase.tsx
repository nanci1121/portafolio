'use client';

import { useState, useMemo } from 'react';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle } from './ui/card';
import type { Skill } from '@/lib/data';
import {
    JavaIcon, JavaScriptIcon, PythonIcon, HtmlIcon, CssIcon, NodeJsIcon,
    FlutterIcon, AndroidIcon, AnsibleIcon, DockerIcon, PostgreSqlIcon, GitIcon,
    RestApiIcon, WebSocketIcon, ServerIcon, ClientIcon, AiIcon
  } from '@/components/icons';

const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
    JavaIcon, JavaScriptIcon, PythonIcon, HtmlIcon, CssIcon, NodeJsIcon,
    FlutterIcon, AndroidIcon, AnsibleIcon, DockerIcon, PostgreSqlIcon, GitIcon,
    RestApiIcon, WebSocketIcon, ServerIcon, ClientIcon, AiIcon
};


interface SkillsShowcaseProps {
  skills: Skill[];
}

export function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = useMemo(() => {
    if (!searchTerm) return skills;
    return skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, skills]);

  return (
    <div className="mt-16">
      <div className="mx-auto max-w-md mb-8">
        <Input
          type="text"
          placeholder="Buscar habilidad (e.g., Python, Frameworks)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-base"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredSkills.map(skill => {
            const IconComponent = iconMap[skill.iconName];
            return (
              <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="p-0">
                  {IconComponent ? <IconComponent className="w-12 h-12 text-primary mx-auto" /> : null}
                </CardHeader>
                <CardTitle className="mt-4 text-base font-medium">{skill.name}</CardTitle>
              </Card>
            )
        })}
      </div>
    </div>
  );
}
