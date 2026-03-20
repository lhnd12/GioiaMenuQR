/**
 * GIOIA CASABLANCA - LUXURY QR ENGINE (V8.0)
 * Optimized for Fiverr Portfolio | High-End UI/UX
 */

// 1. MINIMALIST UNIFORM ICONS (Stroke 1.0 for Luxury Look)
const icons = {
    Tous: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    Salades: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg>`,
    Pizza: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 11h.01M11 15h.01M16 16h.01m-14 0 20 6-6-20A20 20 0 0 0 2 16Z"></path></svg>`,
    Pâtes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v12a4 4 0 0 0 8 0V3M4 11h16"></path></svg>`,
    Plats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>`,
    Desserts: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4Z"></path><path d="M18 8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h12Z"></path></svg>`,
    Boissons: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H6L5 9l7 4 7-4-1-7ZM12 13v8M8 21h8"></path></svg>`
};

// 2. MENU DATABASE (50+ Items Expanded)
const menuData = [
    // --- SALADES (8 items) ---
    { title: "Melrose Salade", price: "115", desc: "Gambas, mangue, avocado grillé, parmesan 24 mois.", cat: "Salades", img: "Salade.jpg" },
    { title: "Burratina Signature", price: "110", desc: "Cœur de Burrata, tomates anciennes, huile de basilic.", cat: "Salades", img: "Salade.jpg" },
    { title: "César au Poulet", price: "95", desc: "Poulet grillé, romaine, croûtons, sauce césar maison.", cat: "Salades", img: "Salade.jpg" },
    { title: "Salade Niçoise", price: "105", desc: "Thon frais, œufs mollets, olives taggiasche, haricots verts.", cat: "Salades", img: "Salade.jpg" },
    { title: "Quinoa Royale", price: "90", desc: "Quinoa bio, grenades, féta, menthe fraîche et citron.", cat: "Salades", img: "Salade.jpg" },
    { title: "Octopus Garden", price: "140", desc: "Poulpe grillé, pommes de terre safranées, roquette.", cat: "Salades", img: "Salade.jpg" },
    { title: "Chèvre Chaud", price: "85", desc: "Toast de chèvre, miel de thym, noix, mesclun.", cat: "Salades", img: "Salade.jpg" },
    { title: "Avocado Toast", price: "95", desc: "Pain au levain, avocat écrasé, œuf poché, piment d'Espelette.", cat: "Salades", img: "Salade.jpg" },

    // --- PIZZA (10 items) ---
    { title: "Margherita Royal", price: "85", desc: "Tomate San Marzano, Mozzarella di Bufala, Basilic.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Truffe Blanche", price: "160", desc: "Crème de truffe, champignons sauvages, huile de truffe.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Quatre Saisons", price: "115", desc: "Artichauts, champignons, jambon de bœuf, olives.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Diavola Spicy", price: "105", desc: "Salami piquant, piments frais, mozzarella.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Bresaola & Ruccola", price: "135", desc: "Bresaola italienne, copeaux de parmesan, roquette.", cat: "Pizza", img: "pizza5.jpg" },
    { title: "Quatre Fromages", price: "110", desc: "Gorgonzola, chèvre, parmesan, mozzarella.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Frutti di Mare", price: "145", desc: "Gambas, calamars, ail, persillade.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Vegetariana", price: "95", desc: "Légumes grillés de saison, pesto de basilic.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Calzone Classique", price: "100", desc: "Pizza chaussée, œuf, jambon, champignons.", cat: "Pizza", img: "Pizza.jpg" },
    { title: "Pizza Burrata", price: "150", desc: "Burrata entière posée sur une base tomate basilic.", cat: "Pizza", img: "Pizza.jpg" },

    // --- PÂTES (8 items) ---
    { title: "Linguini di Mare", price: "135", desc: "Fruits de mer de la côte Atlantique, sauce tomate légère.", cat: "Pâtes", img: "Pâtes.jpg" },
    { title: "Penne All'Arrabbiata", price: "85", desc: "Sauce tomate piquante, ail, persil.", cat: "Pâtes", img: "Pâtes.jpg" },
    { title: "Spaghetti Carbonara", price: "110", desc: "Vraie recette italienne, jaune d'œuf, guanciale de bœuf.", cat: "Pâtes", img: "Pâtes.jpg" },
    { title: "Tagliatelle Truffe", price: "155", desc: "Pâtes fraîches, crème de truffe noire, parmesan.", cat: "Pâtes", img: "Pâtes.jpg" },
    { title: "Lasagne Maison", price: "105", desc: "Bœuf haché, béchamel, gratinée au four.", cat: "Pâtes", img: "Pâtes.jpg" },
    { title: "Gnocchi Pesto", price: "95", desc: "Gnocchi de pomme de terre, pesto de basilic frais.", cat: "Pâtes", img: "Pâtes.jpg" },
    { title: "Rigatoni Bolognese", price: "95", desc: "Mijoté de bœuf à l'italienne pendant 6h.", cat: "Pâtes", img: "Pâtes.jpg" },
    { title: "Ravioli Ricotta", price: "120", desc: "Raviolis frais, épinards, sauce beurre et sauge.", cat: "Pâtes", img: "Pâtes.jpg" },

    // --- PLATS (10 items) ---
    { title: "Filet de Bœuf", price: "195", desc: "Bœuf maturé, sauce au poivre vert, purée maison.", cat: "Plats", img: "Plats.jpg" },
    { title: "Entrecôte Grillée", price: "210", desc: "300g de viande premium, beurre maître d'hôtel.", cat: "Plats", img: "Plats.jpg" },
    { title: "Saumon Teriyaki", price: "180", desc: "Pavé de saumon, sauce soja sucrée, riz basmati.", cat: "Plats", img: "Plats.jpg" },
    { title: "Risotto Gambas", price: "165", desc: "Riz Carnaroli, gambas royales, bisque de crustacés.", cat: "Plats", img: "Plats.jpg" },
    { title: "Souris d'Agneau", price: "185", desc: "Confite 7h, jus au romarin, légumes glacés.", cat: "Plats", img: "Plats.jpg" },
    { title: "Magret de Canard", price: "190", desc: "Sauce miel et bigarade, gratin dauphinois.", cat: "Plats", img: "Plats.jpg" },
    { title: "Loup de Mer", price: "175", desc: "Filet de loup grillé, tombée d'épinards.", cat: "Plats", img: "Plats.jpg" },
    { title: "Burger Gourmet", price: "125", desc: "Bœuf angus, cheddar vieux, frites de patate douce.", cat: "Plats", img: "Plats.jpg" },
    { title: "Poulet Fermier", price: "145", desc: "Suprême de poulet, sauce morilles.", cat: "Plats", img: "Plats.jpg" },
    { title: "Côtelettes d'Agneau", price: "170", desc: "Grillées au feu de bois, herbes de Provence.", cat: "Plats", img: "Plats.jpg" },

    // --- DESSERTS (8 items) ---
    { title: "Tiramisu Tradition", price: "75", desc: "Mascarpone, café, cacao amer.", cat: "Desserts", img: "Desserts.jpg" },
    { title: "Fondant Chocolat", price: "80", desc: "Cœur coulant, glace vanille bourbon.", cat: "Desserts", img: "Desserts.jpg" },
    { title: "Cheesecake Citron", price: "70", desc: "Coulis de fruits rouges, zestes de citron vert.", cat: "Desserts", img: "Desserts.jpg" },
    { title: "Panna Cotta", price: "65", desc: "Vanille de Madagascar, coulis de mangue.", cat: "Desserts", img: "Desserts.jpg" },
    { title: "Tarte Tatin", price: "75", desc: "Pommes caramélisées, crème fraîche double.", cat: "Desserts", img: "Desserts.jpg" },
    { title: "Crème Brûlée", price: "70", desc: "Vanille bleue, cassonade craquante.", cat: "Desserts", img: "Desserts.jpg" },
    { title: "Mousse Chocolat", price: "60", desc: "Chocolat noir 70%, éclats de noisettes.", cat: "Desserts", img: "Desserts.jpg" },
    { title: "Assiette de Fruits", price: "85", desc: "Fruits de saison découpés avec soin.", cat: "Desserts", img: "Desserts.jpg" },

    // --- BOISSONS (8 items) ---
    { title: "Mojito Signature", price: "75", desc: "Menthe, citron vert, eau gazeuse.", cat: "Boissons", img: "Boissons.jpg" },
    { title: "Limonade Maison", price: "45", desc: "Citron pressé, menthe fraîche, miel.", cat: "Boissons", img: "Boissons.jpg" },
    { title: "Thé Glacé Pêche", price: "40", desc: "Thé noir infusé à froid, nectar de pêche.", cat: "Boissons", img: "Boissons.jpg" },
    { title: "Jus d'Orange Frais", price: "35", desc: "Pressé à la minute.", cat: "Boissons", img: "Boissons.jpg" },
    { title: "Cocktail GIOIA", price: "85", desc: "Recette secrète du mixologue.", cat: "Boissons", img: "Boissons.jpg" },
    { title: "Café Espresso", price: "25", desc: "Arabica premium.", cat: "Boissons", img: "Boissons.jpg" },
    { title: "Eau Minérale 75cl", price: "30", desc: "Plate ou Gazeuse.", cat: "Boissons", img: "Boissons.jpg" },
    { title: "Smoothie Exotic", price: "55", desc: "Ananas, mangue, passion.", cat: "Boissons", img: "Boissons.jpg" }
];

let itemsToShow = 10;
let currentFilter = 'Tous';
let currentSearch = '';

// 3. RENDER ENGINE
function renderMenu(resetCount = false) {
    if (resetCount) itemsToShow = 12;
    const grid = document.getElementById('items-grid');
    if (!grid) return;
    grid.innerHTML = "";
    
    const filteredData = menuData.filter(item => {
        const matchesCat = currentFilter === 'Tous' || item.cat === currentFilter;
        const searchLow = currentSearch.toLowerCase();
        return matchesCat && (item.title.toLowerCase().includes(searchLow) || item.desc.toLowerCase().includes(searchLow));
    });

    const paginatedData = filteredData.slice(0, itemsToShow);

    if (paginatedData.length === 0) {
        grid.innerHTML = `<div class="no-results">AUCUN DÉLICE TROUVÉ...</div>`;
        document.getElementById('pagination-container').style.display = 'none';
        return;
    }

    paginatedData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.onclick = () => openItemDetail(item);
        card.innerHTML = `
            <div class="item-header">
                <div class="item-title-wrapper">
                    <div class="elite-icon-mini">${icons[item.cat]}</div>
                    <h3 class="item-title">${item.title.toUpperCase()}</h3>
                </div>
                <span class="item-price">${item.price} DH</span>
            </div>
            <p class="item-desc">${item.desc}</p>
        `;
        grid.appendChild(card);
    });

    setupReveal();
    updatePaginationVisibility(filteredData.length);
}

// 4. CLEAN MODAL (Image Focus Only)
function openItemDetail(item) {
    const imgPath = item.img ? `images/${item.img}` : `https://via.placeholder.com/800x800?text=${item.title}`;
    const modal = document.createElement('div');
    modal.className = 'item-detail-overlay';
    modal.style.display = 'flex';
    modal.onclick = () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 400);
    };
    modal.innerHTML = `
        <div class="detail-card" onclick="event.stopPropagation()">
            <img src="${imgPath}" class="detail-img" alt="${item.title}" onerror="this.src='https://via.placeholder.com/800x800?text=GIOIA'">
            <h2 class="item-title" style="font-size: 1.4rem; margin: 20px 0 10px; color: #FAF9F6; letter-spacing: 2px;">${item.title.toUpperCase()}</h2>
            <p class="item-desc" style="font-style: normal; margin-bottom: 25px; color: #8E8E8E; line-height: 1.6;">${item.desc}</p>
            <div style="display: inline-block; border: 1px solid #C5A059; padding: 10px 25px;">
                <span class="item-price" style="font-size: 1.2rem; color: #C5A059;">${item.price} DH</span>
            </div>
            <p style="color: #444; font-size: 0.55rem; margin-top: 30px; letter-spacing: 3px; text-transform: uppercase;">Toucher pour fermer</p>
        </div>
    `;
    document.body.appendChild(modal);
}

// 5. SMART SEARCH ENTER LOGIC
document.getElementById('menu-search').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const results = document.querySelectorAll('.item-card');
        if (results.length > 0) {
            toggleSearch();
            setTimeout(() => {
                results[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                results[0].style.borderBottom = "1px solid var(--gold-bright)";
                setTimeout(() => results[0].style.borderBottom = "1px solid rgba(197, 160, 89, 0.05)", 2000);
            }, 350);
        }
    }
});

function toggleSearch() {
    const modal = document.getElementById('search-overlay');
    const isVisible = window.getComputedStyle(modal).display === 'flex';
    modal.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) document.getElementById('menu-search').focus();
}

// 6. UI HELPERS
function initCategories() {
    const nav = document.getElementById('category-nav');
    const cats = ["Tous", "Salades", "Pizza", "Pâtes", "Plats", "Desserts", "Boissons"];
    nav.innerHTML = cats.map(c => `
        <button class="cat-item ${c === currentFilter ? 'active' : ''}" onclick="handleFilter(this, '${c}')">
            <div class="cat-svg-wrapper">${icons[c]}</div>
            <span class="cat-text">${c.toUpperCase()}</span>
            <span class="cat-count">${menuData.filter(i => c === "Tous" ? true : i.cat === c).length}</span>
        </button>
    `).join('');
}

function handleFilter(btn, cat) {
    document.querySelectorAll('.cat-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = cat;
    renderMenu(true);
}

function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.item-card').forEach(card => observer.observe(card));
}

function showMore() {
    itemsToShow += 12;
    renderMenu();
}

function updatePaginationVisibility(total) {
    const container = document.getElementById('pagination-container');
    if (container) container.style.display = (itemsToShow >= total) ? 'none' : 'block';
}

document.getElementById('menu-search').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderMenu(true);
});

// 7. BOOTSTRAP
window.addEventListener('DOMContentLoaded', () => {
    initCategories();
    renderMenu();
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transform = 'translateY(-100%)';
            setTimeout(() => loader.style.display = 'none', 1200);
        }
    }, 2200);
});