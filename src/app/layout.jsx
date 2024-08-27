export const metadata = {
  title: "Car Dealer App",
  description: "Filtering cars by type and year",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
