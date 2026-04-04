export default function Home() {
  return (
    <div>
      <h1>Mixed PM Postinstall Test</h1>
      <p>This project uses npm but has a postinstall script that calls pnpm.</p>
      <p>Reproduces production issue from project 226 (ironwatch-control-center).</p>
    </div>
  );
}
