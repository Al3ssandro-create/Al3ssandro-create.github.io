import { CSSProperties } from 'react';
export const box : CSSProperties = {
    minHeight: '100vh',
    margin: "auto",
    textAlign: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // max-height: 100vh;
}
export const container: CSSProperties = {
    minHeight: '100vh',
    margin: "auto",
    textAlign: "center",
    width: "100%",
    display:"grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr ))",
    columnGap: "2rem",
    rowGap: "2rem",
    padding: "2rem",
};