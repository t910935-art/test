import SkillCard from "#/components/SkillCard";
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <ul className="mt-6 list-none p-0 space-y-5">
        <li>
          <SkillCard name="tanstak start"/>
        </li>
         <li>
          <SkillCard name="tanstak start"/>
        </li>
         <li>
          <SkillCard name="tanstak start"/>
        </li>
      </ul>
    </div>
  );
}
