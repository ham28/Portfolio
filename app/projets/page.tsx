import { Header } from "./Header";

export default function Projets() {
  return (
    <main className="text-gray-200 flex flex-col p-6">

        <Header />

        
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
          <div>
            <strong>Andrew Alfred</strong>
            <span>Technical advisor</span>
          </div>
        </div>

    </main>
  );
}