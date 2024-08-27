import './globals.css'

export const metadata = {
  title: "Filter Page",
  description: "Filtering cars by type and year",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
