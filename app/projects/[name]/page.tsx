

export default function Project({ params }: { params: { name: string } }) {
  return (
    <main>
      <h1>{params.name} Project</h1>
    </main>
  );
}
  