export default function GroceryList({
  items,
  onDeleteItem,
  onCheckedItem,
  onDeleteItems,
  orderBy,
  onOrderBy,
}) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}><i className="fl-void"></i>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onCheckedItem(item.id)}
              />
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.quantity} {item.name}
              </span>
              <button type="button" onClick={() => onDeleteItem(item.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={orderBy} onChange={(e) => onOrderBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button type="button" onClick={() => onDeleteItems()}>
          Bersihkan Daftar
        </button>
      </div>
    </>
  );
}