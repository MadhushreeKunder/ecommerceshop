export function Home() {
  return (
    <div>
      <div
        className="flex "
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "4rem 2rem",
          flexWrap: "wrap-reverse", 
          wordWrap: "break-word"
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>
          Shop your best looks on CORAL-store
        </h1>
        <img style={{ width: "100vw" }} src="/images/sapiens (3).png" alt="" />
      </div>
    </div>
  );
}
