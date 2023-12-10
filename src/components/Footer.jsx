export default function Footer({ items }) {
  const checkedItems = items.filter((item) => item.checked === true);

  return checkedItems.length !== 0 ? (
    <footer className="stats">
      Ada {items.length} barang di daftar belanjaan, {checkedItems.length}{" "}
      barang sudah dibeli (
      {Math.round((checkedItems.length * 10 ** 2) / items.length)}%)
    </footer>
  ) : (
    <footer className="stats">
      Ada {items.length} barang di daftar belanjaan, Tidak ada barang sudah
      dibeli
    </footer>
  );
}
