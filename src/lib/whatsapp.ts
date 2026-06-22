export function openWhatsApp(message: string) {
  const phone = "919795766766";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
