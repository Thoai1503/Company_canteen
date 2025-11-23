import "aos/dist/aos.css";

export default function MenuSection() {
  const menuData = {
    starters: [
      {
        title: "Magnam Tiste",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$5.95",
        img: "/assets/img/menu/menu-item-1.png",
      },
      {
        title: "Aut Luia",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$14.95",
        img: "/assets/img/menu/menu-item-2.png",
      },
      {
        title: "Est Eligendi",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$8.95",
        img: "/assets/img/menu/menu-item-3.png",
      },
      {
        title: "Eos Luibusdam",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$12.95",
        img: "/assets/img/menu/menu-item-4.png",
      },
      {
        title: "Eos Luibusdam",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$12.95",
        img: "/assets/img/menu/menu-item-5.png",
      },
      {
        title: "Laboriosam Direva",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$9.95",
        img: "/assets/img/menu/menu-item-6.png",
      },
    ],
    breakfast: [
      {
        title: "Magnam Tiste",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$5.95",
        img: "/assets/img/menu/menu-item-1.png",
      },
      {
        title: "Aut Luia",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$14.95",
        img: "/assets/img/menu/menu-item-2.png",
      },
      {
        title: "Est Eligendi",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$8.95",
        img: "/assets/img/menu/menu-item-3.png",
      },
      {
        title: "Eos Luibusdam",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$12.95",
        img: "/assets/img/menu/menu-item-4.png",
      },
      {
        title: "Eos Luibusdam",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$12.95",
        img: "/assets/img/menu/menu-item-5.png",
      },
      {
        title: "Laboriosam Direva",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$9.95",
        img: "/assets/img/menu/menu-item-6.png",
      },
    ],
    lunch: [
      // copy giống breakfast/starters
    ],
    dinner: [
      // copy giống breakfast/starters
    ],
  };

  const renderMenuItems = (items: typeof menuData.starters) =>
    items.map((item, idx) => (
      <div key={idx} className="col-lg-4 menu-item">
        <a href={item.img} className="glightbox">
          <img src={item.img} className="menu-img img-fluid" alt={item.title} />
        </a>
        <h4>{item.title}</h4>
        <p className="ingredients">{item.ingredients}</p>
        <p className="price">{item.price}</p>
      </div>
    ));

  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p>
          <span>Check Our</span>{" "}
          <span className="description-title">Yummy Menu</span>
        </p>
      </div>

      <div className="container">
        <ul
          className="nav nav-tabs d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {["starters", "breakfast", "lunch", "dinner"].map((tab, i) => (
            <li key={tab} className="nav-item">
              <a
                className={`nav-link ${i === 0 ? "active show" : ""}`}
                data-bs-toggle="tab"
                data-bs-target={`#menu-${tab}`}
              >
                <h4>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-down" data-aos-delay="100">
          {Object.entries(menuData).map(([key, items], i) => (
            <div
              key={key}
              className={`tab-pane fade ${i === 0 ? "active show" : ""}`}
              id={`menu-${key}`}
            >
              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              </div>
              <div className="row gy-5">{renderMenuItems(items)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
