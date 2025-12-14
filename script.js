// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    html.classList.add('dark');
}

themeToggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

mobileMenuToggle?.addEventListener('click', () => {
    mobileNav?.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNav?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// ===== Sample Data =====
const branches = [
    { id: 'cse', name: 'Computer Science Engineering', shortName: 'CSE' },
    { id: 'ece', name: 'Electronics & Communication Engineering', shortName: 'ECE' },
    { id: 'me', name: 'Mechanical Engineering', shortName: 'ME' },
    { id: 'ee', name: 'Electrical Engineering', shortName: 'EE' }
];

const semesters = [
    { id: 'sem1', name: 'Semester 1' },
    { id: 'sem2', name: 'Semester 2' },
    { id: 'sem3', name: 'Semester 3' },
    { id: 'sem4', name: 'Semester 4' },
    { id: 'sem5', name: 'Semester 5' },
    { id: 'sem6', name: 'Semester 6' },
    { id: 'sem7', name: 'Semester 7' },
    { id: 'sem8', name: 'Semester 8' }
];

const subjects = {
    'cse-sem1': [
        { id: 'mathematics-1', name: 'Mathematics I', units: 5 },
        { id: 'physics', name: 'Engineering Physics', units: 5 },
        { id: 'programming', name: 'Programming in C', units: 6 }
    ],
    'cse-sem3': [
        { id: 'data-structures', name: 'Data Structures', units: 6 },
        { id: 'discrete-math', name: 'Discrete Mathematics', units: 5 },
        { id: 'digital-electronics', name: 'Digital Electronics', units: 5 }
    ]
};

const pyqs = [
    { id: 'dsa-2025', subject: 'Data Structures & Algorithms', year: 2025, branch: 'CSE' },
    { id: 'dsa-2025', subject: 'Data Structures & Algorithms', year: 2025, branch: 'CSE' },
    { id: 'os-2025', subject: 'Operating Systems', year: 2025, branch: 'CSE' },
    { id: 'cn-2025', subject: 'Computer Networks', year: 2025, branch: 'CSE' },
    { id: 'dbms-2025', subject: 'Database Management Systems', year: 2025, branch: 'CSE' },
    { id: 'signals-2025', subject: 'Signals & Systems', year: 2025, branch: 'ECE' },
    { id: 'thermo-2025', subject: 'Thermodynamics', year: 2025, branch: 'ME' }
];

const contributors = [
    { name: 'Name1', contributions: 0, avatar: '🧑‍💻' },
    { name: 'Name2', contributions: 0, avatar: '🧑‍💻' },
    { name: 'Name3', contributions: 0, avatar: '🧑‍💻' },
    { name: 'Name4', contributions: 0, avatar: '🧑‍💻' },
    { name: 'Name5', contributions: 0, avatar: '🧑‍💻' },
    { name: 'Name6', contributions: 0, avatar: '🧑‍💻' },
    { name: 'Name7', contributions: 0, avatar: '🧑‍💻' },
    { name: 'Name8', contributions: 0, avatar: '🧑‍💻' }
];

// ===== Helper Functions =====
function getUrlParams() {
    return new URLSearchParams(window.location.search);
}

function createCard(title, description, link, meta) {
    return `
        <a href="${link}" class="card">
            <h3 style="font-weight: 600; margin-bottom: 0.5rem;">${title}</h3>
            <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin-bottom: 0.75rem;">${description}</p>
            ${meta ? `<span style="font-size: 0.75rem; color: hsl(var(--primary));">${meta}</span>` : ''}
        </a>
    `;
}

// ===== Page Initializers =====
function initNotesPage() {
    const container = document.getElementById('notesContent');
    if (!container) return;

    const params = getUrlParams();
    const branch = params.get('branch');
    const semester = params.get('semester');
    const subject = params.get('subject');

    let html = '';
    let breadcrumb = '<a href="notes.html">Notes</a>';

    if (!branch) {
        // Show branches
        html = '<div class="cards-grid">';
        branches.forEach(b => {
            html += createCard(b.name, b.shortName, `notes.html?branch=${b.id}`, '8 Semesters');
        });
        html += '</div>';
    } else if (!semester) {
        // Show semesters
        breadcrumb += ` / <span>${branch.toUpperCase()}</span>`;
        html = '<div class="cards-grid">';
        semesters.forEach(s => {
            html += createCard(s.name, `${branch.toUpperCase()} - ${s.name}`, `notes.html?branch=${branch}&semester=${s.id}`, 'View Subjects');
        });
        html += '</div>';
    } else if (!subject) {
        // Show subjects
        breadcrumb += ` / <a href="notes.html?branch=${branch}">${branch.toUpperCase()}</a> / <span>${semester}</span>`;
        const key = `${branch}-${semester}`;
        const subjectList = subjects[key] || [];
        
        if (subjectList.length === 0) {
            html = '<p style="text-align: center; color: hsl(var(--muted-foreground));">No subjects available for this semester yet. <a href="contribute.html" style="color: hsl(var(--primary));">Contribute now!</a></p>';
        } else {
            html = '<div class="cards-grid">';
            subjectList.forEach(s => {
                html += createCard(s.name, `${s.units} Units available`, `notes.html?branch=${branch}&semester=${semester}&subject=${s.id}`, 'View Notes');
            });
            html += '</div>';
        }
    } else {
        // Show subject content
        breadcrumb += ` / <a href="notes.html?branch=${branch}">${branch.toUpperCase()}</a> / <a href="notes.html?branch=${branch}&semester=${semester}">${semester}</a> / <span>${subject}</span>`;
        html = `
            <div class="prose">
                <h1>${subject.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
                <p>Welcome to the study notes for this subject. Below you'll find comprehensive materials organized by units.</p>
                
                <h2>Unit 1: Introduction</h2>
                <p>This unit covers the fundamental concepts and provides an overview of the subject matter.</p>
                <ul>
                    <li>Basic definitions and terminology</li>
                    <li>Historical background</li>
                    <li>Applications and importance</li>
                </ul>
                
                <h2>Unit 2: Core Concepts</h2>
                <p>Deep dive into the essential theories and principles.</p>
                <blockquote>
                    <strong>Note:</strong> Make sure to understand these concepts thoroughly as they form the foundation for advanced topics.
                </blockquote>
                
                <h2>Unit 3: Advanced Topics</h2>
                <p>Building upon the core concepts, this unit explores more complex scenarios.</p>
                <pre><code>// Example code snippet
function example() {
    console.log("Hello, World!");
    return true;
}</code></pre>
                
                <p style="margin-top: 2rem; padding: 1rem; background: hsl(var(--muted)); border-radius: 0.5rem; font-size: 0.875rem;">
                    <strong>Last updated:</strong> December 2025 by Name1
                </p>
            </div>
        `;
    }

    document.getElementById('breadcrumb').innerHTML = breadcrumb;
    container.innerHTML = html;
}

function initPYQsPage() {
    const container = document.getElementById('pyqsContent');
    const filtersContainer = document.getElementById('pyqFilters');
    if (!container) return;

    let currentFilter = 'all';

    function renderPYQs(filter) {
        const filtered = filter === 'all' 
            ? pyqs 
            : pyqs.filter(p => p.branch === filter);

        if (filtered.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: hsl(var(--muted-foreground));">No PYQs found for this filter.</p>';
            return;
        }

        let html = '<div class="cards-grid">';
        filtered.forEach(p => {
            html += createCard(p.subject, `${p.branch} - ${p.year}`, '#', `Year ${p.year}`);
        });
        html += '</div>';
        container.innerHTML = html;
    }

    function renderFilters() {
        const uniqueBranches = [...new Set(pyqs.map(p => p.branch))];
        let html = `<button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>`;
        uniqueBranches.forEach(branch => {
            html += `<button class="filter-btn ${currentFilter === branch ? 'active' : ''}" data-filter="${branch}">${branch}</button>`;
        });
        filtersContainer.innerHTML = html;

        filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentFilter = btn.dataset.filter;
                renderFilters();
                renderPYQs(currentFilter);
            });
        });
    }

    renderFilters();
    renderPYQs(currentFilter);
}

function initContributorsPage() {
    const container = document.getElementById('contributorsContent');
    if (!container) return;

    let html = '<div class="contributors-grid">';
    contributors.forEach((c, i) => {
        html += `
            <div class="contributor-card animate-fade-in animate-delay-${i % 4}">
                <div class="contributor-avatar">${c.avatar}</div>
                <h4>${c.name}</h4>
                <p>${c.contributions} contributions</p>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

function initSearchPage() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');
    if (!searchInput || !resultsContainer) return;

    const allItems = [
        ...pyqs.map(p => ({ ...p, type: 'pyq', title: p.subject })),
        { type: 'note', title: 'Data Structures', description: 'CSE - Semester 3' },
        { type: 'note', title: 'Programming in Python', description: 'CSE - Semester 1' },
        { type: 'note', title: 'Digital Electronics', description: 'CSE - Semester 3' }
    ];

    function search(query) {
        if (!query.trim()) {
            resultsContainer.innerHTML = '<p style="text-align: center; color: hsl(var(--muted-foreground));">Start typing to search...</p>';
            return;
        }

        const results = allItems.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            (item.subject && item.subject.toLowerCase().includes(query.toLowerCase()))
        );

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p style="text-align: center; color: hsl(var(--muted-foreground));">No results found.</p>';
            return;
        }

        let html = '<div class="cards-grid">';
        results.forEach(r => {
            const desc = r.type === 'pyq' ? `${r.branch} - ${r.year}` : r.description;
            const badge = r.type === 'pyq' ? 'PYQ' : 'Note';
            html += createCard(r.title || r.subject, desc, '#', badge);
        });
        html += '</div>';
        resultsContainer.innerHTML = html;
    }

    searchInput.addEventListener('input', (e) => search(e.target.value));
}

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we're on and initialize accordingly
    const path = window.location.pathname;
    
    if (path.includes('notes.html')) {
        initNotesPage();
    } else if (path.includes('pyqs.html')) {
        initPYQsPage();
    } else if (path.includes('contributors.html')) {
        initContributorsPage();
    } else if (path.includes('search.html')) {
        initSearchPage();
    }
});
