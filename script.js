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
    // CSE Subjects
    'cse-sem1': [
        { id: 'mathematics-1', name: 'Mathematics I', units: 5 },
        { id: 'physics', name: 'Engineering Physics', units: 5 },
        { id: 'programming', name: 'Programming in C', units: 6 }
    ],
    'cse-sem2': [
        { id: 'mathematics-2', name: 'Mathematics II', units: 5 },
        { id: 'chemistry', name: 'Engineering Chemistry', units: 5 },
        { id: 'programming-cpp', name: 'Programming in C++', units: 6 }
    ],
    'cse-sem3': [
        { id: 'data-structures', name: 'Data Structures', units: 6 },
        { id: 'discrete-math', name: 'Discrete Mathematics', units: 5 },
        { id: 'digital-electronics', name: 'Digital Electronics', units: 5 }
    ],
    'cse-sem4': [
        { id: 'algorithms', name: 'Design and Analysis of Algorithms', units: 6 },
        { id: 'database-systems', name: 'Database Management Systems', units: 5 },
        { id: 'operating-systems', name: 'Operating Systems', units: 5 }
    ],
    'cse-sem5': [
        { id: 'computer-networks', name: 'Computer Networks', units: 6 },
        { id: 'compiler-design', name: 'Compiler Design', units: 5 },
        { id: 'web-technologies', name: 'Web Technologies', units: 5 }
    ],
    'cse-sem6': [
        { id: 'software-engineering', name: 'Software Engineering', units: 6 },
        { id: 'database-lab', name: 'Database Lab', units: 4 },
        { id: 'network-security', name: 'Network Security', units: 5 }
    ],
    'cse-sem7': [
        { id: 'ai-ml', name: 'Artificial Intelligence & Machine Learning', units: 6 },
        { id: 'cloud-computing', name: 'Cloud Computing', units: 5 },
        { id: 'mobile-app', name: 'Mobile Application Development', units: 5 }
    ],
    'cse-sem8': [
        { id: 'project', name: 'Project/Internship', units: 12 },
        { id: 'elective', name: 'Open Elective', units: 3 }
    ],
    
    // ECE Subjects
    'ece-sem1': [
        { id: 'mathematics-1', name: 'Mathematics I', units: 5 },
        { id: 'physics', name: 'Engineering Physics', units: 5 },
        { id: 'circuits', name: 'Basic Circuit Theory', units: 6 }
    ],
    'ece-sem2': [
        { id: 'mathematics-2', name: 'Mathematics II', units: 5 },
        { id: 'chemistry', name: 'Engineering Chemistry', units: 5 },
        { id: 'circuit-analysis', name: 'Circuit Analysis', units: 6 }
    ],
    'ece-sem3': [
        { id: 'signals-systems', name: 'Signals & Systems', units: 6 },
        { id: 'electromagnetics', name: 'Electromagnetics', units: 5 },
        { id: 'digital-electronics', name: 'Digital Electronics', units: 5 }
    ],
    'ece-sem4': [
        { id: 'microprocessors', name: 'Microprocessors & Microcontrollers', units: 6 },
        { id: 'communication-systems', name: 'Communication Systems', units: 5 },
        { id: 'power-electronics', name: 'Power Electronics', units: 5 }
    ],
    'ece-sem5': [
        { id: 'vlsi-design', name: 'VLSI Design', units: 6 },
        { id: 'antenna-propagation', name: 'Antenna & Wave Propagation', units: 5 },
        { id: 'dsp', name: 'Digital Signal Processing', units: 5 }
    ],
    'ece-sem6': [
        { id: 'embedded-systems', name: 'Embedded Systems', units: 6 },
        { id: 'wireless-networks', name: 'Wireless Networks', units: 5 },
        { id: 'control-systems', name: 'Control Systems', units: 5 }
    ],
    'ece-sem7': [
        { id: 'advanced-vlsi', name: 'Advanced VLSI', units: 6 },
        { id: 'optical-comm', name: 'Optical Communication', units: 5 },
        { id: 'iot', name: 'Internet of Things (IoT)', units: 5 }
    ],
    'ece-sem8': [
        { id: 'project', name: 'Project/Internship', units: 12 },
        { id: 'elective', name: 'Open Elective', units: 3 }
    ],
    
    // ME Subjects
    'me-sem1': [
        { id: 'mathematics-1', name: 'Mathematics I', units: 5 },
        { id: 'physics', name: 'Engineering Physics', units: 5 },
        { id: 'engineering-mechanics', name: 'Engineering Mechanics', units: 6 }
    ],
    'me-sem2': [
        { id: 'mathematics-2', name: 'Mathematics II', units: 5 },
        { id: 'chemistry', name: 'Engineering Chemistry', units: 5 },
        { id: 'thermodynamics', name: 'Thermodynamics', units: 6 }
    ],
    'me-sem3': [
        { id: 'materials-science', name: 'Materials Science & Engineering', units: 6 },
        { id: 'manufacturing', name: 'Manufacturing Technology', units: 5 },
        { id: 'mechanics-solids', name: 'Mechanics of Solids', units: 5 }
    ],
    'me-sem4': [
        { id: 'fluid-mechanics', name: 'Fluid Mechanics', units: 6 },
        { id: 'heat-transfer', name: 'Heat Transfer', units: 5 },
        { id: 'machine-design', name: 'Machine Design', units: 5 }
    ],
    'me-sem5': [
        { id: 'ic-engines', name: 'Internal Combustion Engines', units: 6 },
        { id: 'refrigeration', name: 'Refrigeration & Air Conditioning', units: 5 },
        { id: 'automation', name: 'Automation & Robotics', units: 5 }
    ],
    'me-sem6': [
        { id: 'power-plants', name: 'Thermal Power Plants', units: 6 },
        { id: 'vibration-dynamics', name: 'Vibration & Dynamics', units: 5 },
        { id: 'cfd', name: 'Computational Fluid Dynamics', units: 5 }
    ],
    'me-sem7': [
        { id: 'advanced-thermodynamics', name: 'Advanced Thermodynamics', units: 6 },
        { id: 'energy-systems', name: 'Energy Systems & Sustainability', units: 5 },
        { id: 'vibration-control', name: 'Vibration Control', units: 5 }
    ],
    'me-sem8': [
        { id: 'project', name: 'Project/Internship', units: 12 },
        { id: 'elective', name: 'Open Elective', units: 3 }
    ],
    
    // EE Subjects
    'ee-sem1': [
        { id: 'mathematics-1', name: 'Mathematics I', units: 5 },
        { id: 'physics', name: 'Engineering Physics', units: 5 },
        { id: 'electrical-circuits', name: 'Electrical Circuits', units: 6 }
    ],
    'ee-sem2': [
        { id: 'mathematics-2', name: 'Mathematics II', units: 5 },
        { id: 'chemistry', name: 'Engineering Chemistry', units: 5 },
        { id: 'ac-circuits', name: 'AC Circuits & Analysis', units: 6 }
    ],
    'ee-sem3': [
        { id: 'electromagnetism', name: 'Electromagnetism', units: 6 },
        { id: 'electrical-machines', name: 'Electrical Machines - I', units: 5 },
        { id: 'power-systems', name: 'Power Systems', units: 5 }
    ],
    'ee-sem4': [
        { id: 'machines-2', name: 'Electrical Machines - II', units: 6 },
        { id: 'power-electronics', name: 'Power Electronics', units: 5 },
        { id: 'power-generation', name: 'Power Generation & Distribution', units: 5 }
    ],
    'ee-sem5': [
        { id: 'control-systems', name: 'Control Systems', units: 6 },
        { id: 'electrical-drives', name: 'Electrical Drives', units: 5 },
        { id: 'power-transmission', name: 'Power Transmission & Distribution', units: 5 }
    ],
    'ee-sem6': [
        { id: 'switch-protection', name: 'Switch Gear & Protection', units: 6 },
        { id: 'renewable-energy', name: 'Renewable Energy Systems', units: 5 },
        { id: 'hv-engineering', name: 'High Voltage Engineering', units: 5 }
    ],
    'ee-sem7': [
        { id: 'advanced-drives', name: 'Advanced Drives & Control', units: 6 },
        { id: 'smart-grid', name: 'Smart Grid Technology', units: 5 },
        { id: 'power-quality', name: 'Power Quality & Management', units: 5 }
    ],
    'ee-sem8': [
        { id: 'project', name: 'Project/Internship', units: 12 },
        { id: 'elective', name: 'Open Elective', units: 3 }
    ]
};

const pyqs = [
    // CSE PYQs
    { id: 'dsa-2025', subject: 'Data Structures & Algorithms', year: 2025, branch: 'CSE' },
    { id: 'dsa-2024', subject: 'Data Structures & Algorithms', year: 2024, branch: 'CSE' },
    { id: 'dsa-2023', subject: 'Data Structures & Algorithms', year: 2023, branch: 'CSE' },
    { id: 'os-2025', subject: 'Operating Systems', year: 2025, branch: 'CSE' },
    { id: 'os-2024', subject: 'Operating Systems', year: 2024, branch: 'CSE' },
    { id: 'os-2023', subject: 'Operating Systems', year: 2023, branch: 'CSE' },
    { id: 'cn-2025', subject: 'Computer Networks', year: 2025, branch: 'CSE' },
    { id: 'cn-2024', subject: 'Computer Networks', year: 2024, branch: 'CSE' },
    { id: 'cn-2023', subject: 'Computer Networks', year: 2023, branch: 'CSE' },
    { id: 'dbms-2025', subject: 'Database Management Systems', year: 2025, branch: 'CSE' },
    { id: 'dbms-2024', subject: 'Database Management Systems', year: 2024, branch: 'CSE' },
    { id: 'dbms-2023', subject: 'Database Management Systems', year: 2023, branch: 'CSE' },
    { id: 'se-2025', subject: 'Software Engineering', year: 2025, branch: 'CSE' },
    { id: 'se-2024', subject: 'Software Engineering', year: 2024, branch: 'CSE' },
    { id: 'compiler-2025', subject: 'Compiler Design', year: 2025, branch: 'CSE' },
    { id: 'compiler-2024', subject: 'Compiler Design', year: 2024, branch: 'CSE' },
    { id: 'aiml-2025', subject: 'Artificial Intelligence & Machine Learning', year: 2025, branch: 'CSE' },
    { id: 'aiml-2024', subject: 'Artificial Intelligence & Machine Learning', year: 2024, branch: 'CSE' },
    
    // ECE PYQs
    { id: 'signals-2025', subject: 'Signals & Systems', year: 2025, branch: 'ECE' },
    { id: 'signals-2024', subject: 'Signals & Systems', year: 2024, branch: 'ECE' },
    { id: 'signals-2023', subject: 'Signals & Systems', year: 2023, branch: 'ECE' },
    { id: 'electromagnetics-2025', subject: 'Electromagnetics', year: 2025, branch: 'ECE' },
    { id: 'electromagnetics-2024', subject: 'Electromagnetics', year: 2024, branch: 'ECE' },
    { id: 'electromagnetics-2023', subject: 'Electromagnetics', year: 2023, branch: 'ECE' },
    { id: 'machines-2025', subject: 'Electrical Machines', year: 2025, branch: 'ECE' },
    { id: 'machines-2024', subject: 'Electrical Machines', year: 2024, branch: 'ECE' },
    { id: 'dsp-2025', subject: 'Digital Signal Processing', year: 2025, branch: 'ECE' },
    { id: 'dsp-2024', subject: 'Digital Signal Processing', year: 2024, branch: 'ECE' },
    { id: 'vlsi-2025', subject: 'VLSI Design', year: 2025, branch: 'ECE' },
    { id: 'vlsi-2024', subject: 'VLSI Design', year: 2024, branch: 'ECE' },
    { id: 'embedded-2025', subject: 'Embedded Systems', year: 2025, branch: 'ECE' },
    { id: 'embedded-2024', subject: 'Embedded Systems', year: 2024, branch: 'ECE' },
    { id: 'wireless-2025', subject: 'Wireless Networks', year: 2025, branch: 'ECE' },
    { id: 'wireless-2024', subject: 'Wireless Networks', year: 2024, branch: 'ECE' },
    
    // ME PYQs
    { id: 'thermo-2025', subject: 'Thermodynamics', year: 2025, branch: 'ME' },
    { id: 'mechanics-2025', subject: 'Mechanics of Solids', year: 2025, branch: 'ME' },
    { id: 'materials-2025', subject: 'Materials Science', year: 2025, branch: 'ME' },
    { id: 'materials-2024', subject: 'Materials Science', year: 2024, branch: 'ME' },
    { id: 'fluid-2025', subject: 'Fluid Mechanics', year: 2025, branch: 'ME' },
    { id: 'fluid-2024', subject: 'Fluid Mechanics', year: 2024, branch: 'ME' },
    { id: 'heatransfer-2025', subject: 'Heat Transfer', year: 2025, branch: 'ME' },
    { id: 'heatransfer-2024', subject: 'Heat Transfer', year: 2024, branch: 'ME' },
    { id: 'machines-2025', subject: 'Machine Design', year: 2025, branch: 'ME' },
    { id: 'machines-2024', subject: 'Machine Design', year: 2024, branch: 'ME' },
    { id: 'manufacturing-2025', subject: 'Manufacturing Technology', year: 2025, branch: 'ME' },
    { id: 'manufacturing-2024', subject: 'Manufacturing Technology', year: 2024, branch: 'ME' },
];

const contributors = [
    { name: 'Aryan Sharma', contributions: 15, avatar: '👨‍💻' },
    { name: 'Priya Verma', contributions: 12, avatar: '👩‍💻' },
    { name: 'Rajesh Kumar', contributions: 18, avatar: '👨‍💻' },
    { name: 'Neha Singh', contributions: 10, avatar: '👩‍💻' },
    { name: 'Aditya Patel', contributions: 20, avatar: '👨‍💻' },
    { name: 'Deepak Gupta', contributions: 14, avatar: '👨‍💻' },
    { name: 'Anjali Mehta', contributions: 16, avatar: '👩‍💻' },
    { name: 'Vikram Rao', contributions: 11, avatar: '👨‍💻' }
];

// ===== PYQ Content Database =====
const pyqContent = {
    'dsa': {
        questions: [
            { num: 1, text: 'Define data structure and explain the different types of data structures with examples.' },
            { num: 2, text: 'Write a program to implement a Stack using arrays and perform push, pop, and display operations.' },
            { num: 3, text: 'Explain the difference between Binary Search Tree (BST) and AVL tree. How is tree balancing done in AVL trees?' },
            { num: 4, text: 'Implement a Queue using linked list with enqueue and dequeue operations.' },
            { num: 5, text: 'Given an unsorted array, find the kth largest element using the quickselect algorithm.' },
            { num: 6, text: 'Explain graph traversal methods: DFS and BFS with their applications and time complexities.' },
            { num: 7, text: 'Implement merge sort and analyze its time and space complexity.' },
            { num: 8, text: 'What is hashing? Explain collision resolution techniques: linear probing, quadratic probing, and chaining.' }
        ]
    },
    'os': {
        questions: [
            { num: 1, text: 'Explain the process lifecycle and different process states in an operating system.' },
            { num: 2, text: 'What is deadlock? Explain the four necessary and sufficient conditions for deadlock occurrence.' },
            { num: 3, text: 'Describe different CPU scheduling algorithms: FCFS, SJF, Priority Scheduling, and Round Robin.' },
            { num: 4, text: 'Explain virtual memory and paging. How does page replacement work?' },
            { num: 5, text: 'What is semaphore and mutex? Explain their differences and use cases.' },
            { num: 6, text: 'Describe the file system structure and file allocation methods: contiguous, linked, and indexed.' },
            { num: 7, text: 'What is thrashing? How can it be prevented?' },
            { num: 8, text: 'Explain the banker\'s algorithm for deadlock avoidance.' }
        ]
    },
    'cn': {
        questions: [
            { num: 1, text: 'Explain the OSI model and the functions of each layer.' },
            { num: 2, text: 'Describe the TCP/IP model and compare it with the OSI model.' },
            { num: 3, text: 'What is IP addressing? Explain IPv4 and IPv6 with their advantages and disadvantages.' },
            { num: 4, text: 'Explain subnetting and CIDR notation. Calculate subnets for a given IP address.' },
            { num: 5, text: 'Describe the difference between TCP and UDP protocols.' },
            { num: 6, text: 'What is DNS? How does the DNS resolution process work?' },
            { num: 7, text: 'Explain routing algorithms: Distance Vector and Link State routing.' },
            { num: 8, text: 'Describe the working of HTTP and HTTPS protocols.' }
        ]
    },
    'dbms': {
        questions: [
            { num: 1, text: 'Explain the ACID properties in database transactions.' },
            { num: 2, text: 'Define normalization and explain the different normal forms: 1NF, 2NF, 3NF, BCNF.' },
            { num: 3, text: 'Write SQL queries for: JOIN operations, GROUP BY, HAVING, subqueries, and set operations.' },
            { num: 4, text: 'What is indexing? Explain B-tree and Hash indexes.' },
            { num: 5, text: 'Explain different types of joins: INNER, LEFT, RIGHT, FULL OUTER, and CROSS join.' },
            { num: 6, text: 'Describe recovery algorithms: Undo/Redo logging.' },
            { num: 7, text: 'What are views? Explain updatable views and their restrictions.' },
            { num: 8, text: 'Explain the concept of foreign keys and referential integrity.' }
        ]
    },
    'se': {
        questions: [
            { num: 1, text: 'Explain different SDLC models: Waterfall, Agile, DevOps, and Spiral models.' },
            { num: 2, text: 'What is software testing? Describe different testing levels: Unit, Integration, System, and UAT.' },
            { num: 3, text: 'Explain design patterns: Singleton, Factory, Observer, and Strategy patterns.' },
            { num: 4, text: 'What is software requirements analysis? Explain functional and non-functional requirements.' },
            { num: 5, text: 'Describe UML diagrams: Class, Sequence, Use Case, and State diagrams.' },
            { num: 6, text: 'What is refactoring? List common code smells and their solutions.' },
            { num: 7, text: 'Explain version control systems and branching strategies.' },
            { num: 8, text: 'Describe continuous integration and continuous deployment (CI/CD).' }
        ]
    },
    'compiler': {
        questions: [
            { num: 1, text: 'Explain the phases of compiler: Lexical Analysis, Syntax Analysis, Semantic Analysis, and Code Generation.' },
            { num: 2, text: 'What is a token? Explain lexemes and tokens with examples.' },
            { num: 3, text: 'Explain context-free grammars and Backus-Naur form (BNF).' },
            { num: 4, text: 'Describe parsing techniques: Top-down parsing and Bottom-up parsing.' },
            { num: 5, text: 'What is symbol table? Explain its structure and operations.' },
            { num: 6, text: 'Explain code optimization techniques: constant folding, dead code elimination, loop optimization.' },
            { num: 7, text: 'Describe error recovery techniques in parsing.' },
            { num: 8, text: 'Explain three-address code and intermediate code generation.' }
        ]
    },
    'signals': {
        questions: [
            { num: 1, text: 'Define signals and systems. Classify signals: continuous/discrete, periodic/aperiodic, even/odd.' },
            { num: 2, text: 'Explain the properties of LTI systems: linearity, time-invariance, causality, and stability.' },
            { num: 3, text: 'Explain the Fourier series and Fourier transform. Derive key properties.' },
            { num: 4, text: 'Describe Laplace transform and its region of convergence (ROC).' },
            { num: 5, text: 'What is Z-transform? Explain its inverse and applications.' },
            { num: 6, text: 'Explain convolution: graphical method, properties, and applications.' },
            { num: 7, text: 'Describe frequency response and Bode plots.' },
            { num: 8, text: 'Explain sampling theorem, aliasing, and Nyquist frequency.' }
        ]
    },
    'electromagnetics': {
        questions: [
            { num: 1, text: 'State and explain Coulomb\'s law. Calculate electric field due to point charges and continuous distributions.' },
            { num: 2, text: 'Explain Gauss\'s law and its applications to find electric fields.' },
            { num: 3, text: 'Define electric potential and potential difference. Derive the relationship with electric field.' },
            { num: 4, text: 'Explain magnetic field and Ampere\'s law. Calculate magnetic field for different configurations.' },
            { num: 5, text: 'State and explain Faraday\'s law of electromagnetic induction.' },
            { num: 6, text: 'Derive Maxwell\'s equations and explain their significance.' },
            { num: 7, text: 'Explain electromagnetic wave propagation and properties of EM waves.' },
            { num: 8, text: 'Define Poynting vector and explain energy flow in electromagnetic fields.' }
        ]
    },
    'thermodynamics': {
        questions: [
            { num: 1, text: 'State and explain the First Law of Thermodynamics. Derive the first law for different processes.' },
            { num: 2, text: 'Define entropy and state the Second Law of Thermodynamics.' },
            { num: 3, text: 'Explain the Carnot cycle and derive the Carnot efficiency.' },
            { num: 4, text: 'Define enthalpy and explain its significance in constant pressure processes.' },
            { num: 5, text: 'Explain P-V-T relationships for ideal and real gases.' },
            { num: 6, text: 'Describe different thermodynamic processes: isothermal, adiabatic, isobaric, isochoric.' },
            { num: 7, text: 'Explain the concept of availability and irreversibility.' },
            { num: 8, text: 'State and explain the Third Law of Thermodynamics.' }
        ]
    },
    'materials': {
        questions: [
            { num: 1, text: 'Explain crystal structures: FCC, BCC, HCP with their coordination numbers.' },
            { num: 2, text: 'Define stress and strain. Explain elastic and plastic deformation.' },
            { num: 3, text: 'Describe different types of crystal defects: point, line, surface, and volume defects.' },
            { num: 4, text: 'Explain phase diagrams and the lever rule for composition calculations.' },
            { num: 5, text: 'Describe the microstructure of steel and its relationship with properties.' },
            { num: 6, text: 'Explain strengthening mechanisms: solid solution, grain boundary, and precipitation hardening.' },
            { num: 7, text: 'Describe TTT diagrams and their application in heat treatment.' },
            { num: 8, text: 'Explain fatigue and crack propagation in materials.' }
        ]
    },
    'fluid': {
        questions: [
            { num: 1, text: 'Explain Bernoulli\'s equation and its applications.' },
            { num: 2, text: 'Derive the continuity equation and explain its physical significance.' },
            { num: 3, text: 'Describe different types of fluid flow: laminar, turbulent, transitional.' },
            { num: 4, text: 'Explain pressure drop in pipes using Darcy-Weisbach equation.' },
            { num: 5, text: 'Derive Navier-Stokes equations and explain their components.' },
            { num: 6, text: 'Describe boundary layer separation and its effects.' },
            { num: 7, text: 'Explain drag and lift forces on objects in fluid flow.' },
            { num: 8, text: 'Describe dimensional analysis and Buckingham Pi theorem.' }
        ]
    }
};

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
        const subjectName = subject.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        // Get subject content based on subject ID
        const getSubjectContent = () => {
            const contentMap = {
                'programming': {
                    desc: 'Learn the fundamentals of C programming language',
                    units: [
                        { title: 'Introduction to C', topics: ['History of C', 'Structure of C program', 'Compilation and execution', 'Variables and data types', 'Operators in C'] },
                        { title: 'Control Structures', topics: ['If-else statements', 'Switch-case', 'Loops: for, while, do-while', 'Break and continue', 'Nested loops'] },
                        { title: 'Functions & Arrays', topics: ['Function declaration and definition', 'Parameter passing', 'Recursion', 'Arrays: 1D and 2D', 'Strings in C'] },
                        { title: 'Pointers & Memory', topics: ['Pointer basics', 'Address-of and dereferencing', 'Dynamic memory allocation', 'Pointer to pointer', 'Memory management'] },
                        { title: 'Structures & Files', topics: ['Structure definition', 'Typedef', 'File I/O operations', 'Reading and writing files', 'Command line arguments'] }
                    ]
                },
                'data-structures': {
                    desc: 'Comprehensive study of data structures and their implementations',
                    units: [
                        { title: 'Linear Data Structures', topics: ['Arrays', 'Linked Lists (Singly, Doubly, Circular)', 'Stacks', 'Queues', 'Deques'] },
                        { title: 'Trees', topics: ['Binary Trees', 'Binary Search Trees', 'AVL Trees', 'Heaps', 'Tree traversals'] },
                        { title: 'Graphs', topics: ['Graph representation', 'DFS and BFS', 'Shortest path algorithms', 'Spanning trees', 'Topological sorting'] },
                        { title: 'Hash Tables', topics: ['Hashing concepts', 'Collision resolution', 'Hash functions', 'Hash tables implementation', 'Applications'] },
                        { title: 'Algorithm Analysis', topics: ['Time complexity', 'Space complexity', 'Big O notation', 'Asymptotic analysis', 'Practical performance'] }
                    ]
                },
                'algorithms': {
                    desc: 'Design and analysis of efficient algorithms',
                    units: [
                        { title: 'Algorithm Basics', topics: ['Algorithm definition', 'Problem analysis', 'Solution design', 'Correctness proof', 'Efficiency analysis'] },
                        { title: 'Sorting Algorithms', topics: ['Bubble sort', 'Selection sort', 'Insertion sort', 'Merge sort', 'Quick sort', 'Heap sort', 'Counting sort'] },
                        { title: 'Searching & Selection', topics: ['Linear search', 'Binary search', 'Selection algorithm', 'Order statistics', 'Randomized algorithms'] },
                        { title: 'Divide & Conquer', topics: ['Merge sort', 'Quick sort', 'Strassen matrix multiplication', 'Closest pair problem'] },
                        { title: 'Dynamic Programming', topics: ['Optimal substructure', 'Overlapping subproblems', 'Memoization', 'Tabulation', 'Knapsack problem', 'Longest subsequences'] }
                    ]
                },
                'operating-systems': {
                    desc: 'Understanding operating system concepts and design',
                    units: [
                        { title: 'OS Fundamentals', topics: ['Process concept', 'Process states', 'Process scheduling', 'Context switching', 'Process creation and termination'] },
                        { title: 'Memory Management', topics: ['Virtual memory', 'Paging', 'Segmentation', 'Page replacement algorithms', 'TLB'] },
                        { title: 'File Systems', topics: ['File concept', 'File organization', 'Directory structures', 'File access methods', 'Disk scheduling'] },
                        { title: 'Synchronization', topics: ['Critical section problem', 'Mutex and semaphores', 'Deadlock', 'Deadlock prevention', 'Banker\'s algorithm'] },
                        { title: 'I/O & Device Management', topics: ['I/O subsystem', 'Disk scheduling algorithms', 'Device controllers', 'DMA', 'Interrupt handling'] }
                    ]
                },
                'database-systems': {
                    desc: 'Design and implementation of database systems',
                    units: [
                        { title: 'Database Fundamentals', topics: ['Data models', 'Relational model', 'Database schemas', 'Keys and relationships', 'Integrity constraints'] },
                        { title: 'SQL', topics: ['DDL statements', 'DML statements', 'Queries', 'Joins', 'Aggregation', 'Subqueries', 'Views'] },
                        { title: 'Normalization', topics: ['First normal form', 'Second normal form', 'Third normal form', 'Boyce-Codd normal form', 'Denormalization'] },
                        { title: 'Indexing & Query', topics: ['Index structures', 'B-trees', 'Hash indexes', 'Query optimization', 'Query execution plans'] },
                        { title: 'Transactions & Recovery', topics: ['ACID properties', 'Transaction states', 'Commit and rollback', 'Recovery algorithms', 'Backup strategies'] }
                    ]
                },
                'computer-networks': {
                    desc: 'Study of networking concepts and protocols',
                    units: [
                        { title: 'Network Fundamentals', topics: ['Network types', 'OSI model', 'TCP/IP model', 'Network topologies', 'Network devices'] },
                        { title: 'Physical & Link Layer', topics: ['Transmission media', 'Signal propagation', 'MAC addressing', 'Ethernet', 'Switching'] },
                        { title: 'Network Layer', topics: ['IP addressing', 'Subnetting', 'Routing algorithms', 'Router working', 'ICMP'] },
                        { title: 'Transport Layer', topics: ['TCP protocol', 'UDP protocol', 'Port numbers', 'Flow control', 'Congestion control'] },
                        { title: 'Application Layer', topics: ['DNS', 'HTTP/HTTPS', 'FTP', 'SMTP', 'POP3', 'Socket programming'] }
                    ]
                },
                'mathematics-1': {
                    desc: 'Foundational mathematics for engineering',
                    units: [
                        { title: 'Calculus - Differential', topics: ['Limits and continuity', 'Derivatives', 'Rules of differentiation', 'Mean value theorem', 'Taylor series'] },
                        { title: 'Calculus - Integral', topics: ['Antiderivatives', 'Definite integrals', 'Integration techniques', 'Applications of integration', 'Improper integrals'] },
                        { title: 'Multivariable Calculus', topics: ['Partial derivatives', 'Directional derivatives', 'Multiple integrals', 'Vector fields', 'Gradient and divergence'] },
                        { title: 'Differential Equations', topics: ['First order ODE', 'Second order ODE', 'Linear differential equations', 'Homogeneous equations', 'Particular solutions'] },
                        { title: 'Series & Sequences', topics: ['Infinite series', 'Convergence tests', 'Power series', 'Fourier series', 'Applications'] }
                    ]
                },
                'signals-systems': {
                    desc: 'Analysis of signals and systems',
                    units: [
                        { title: 'Signals & Classification', topics: ['Continuous and discrete signals', 'Deterministic and random signals', 'Periodic signals', 'Energy and power signals'] },
                        { title: 'Systems & Properties', topics: ['Linear systems', 'Time-invariant systems', 'Causality', 'Stability', 'LTI systems'] },
                        { title: 'Convolution & Fourier', topics: ['Convolution operation', 'Fourier transform', 'Frequency response', 'Laplace transform', 'Z-transform'] },
                        { title: 'Filtering', topics: ['Ideal filters', 'Practical filters', 'Butterworth filters', 'Chebyshev filters', 'Filter design'] },
                        { title: 'Digital Signals', topics: ['Sampling theorem', 'Aliasing', 'Quantization', 'DFT', 'FFT algorithms'] }
                    ]
                },
                'electromagnetics': {
                    desc: 'Study of electromagnetic theory and applications',
                    units: [
                        { title: 'Electric Fields', topics: ['Coulomb\'s law', 'Electric field', 'Gauss law', 'Electric potential', 'Capacitance'] },
                        { title: 'Magnetic Fields', topics: ['Magnetic field', 'Ampere law', 'Magnetic materials', 'Magnetization', 'Permeability'] },
                        { title: 'Electromagnetic Induction', topics: ['Faraday\'s law', 'Lenz law', 'Inductance', 'Self and mutual inductance', 'Energy storage'] },
                        { title: 'Maxwell Equations', topics: ['Electric flux density', 'Magnetic field intensity', 'Displacement current', 'Maxwell equations', 'EM wave equations'] },
                        { title: 'EM Waves', topics: ['Wave propagation', 'Polarization', 'Reflection and refraction', 'Skin depth', 'Antenna concepts'] }
                    ]
                },
                'thermodynamics': {
                    desc: 'Principles of thermodynamics and heat transfer',
                    units: [
                        { title: 'First Law', topics: ['Internal energy', 'Work and heat', 'First law of thermodynamics', 'Enthalpy', 'Heat capacity'] },
                        { title: 'Second Law', topics: ['Entropy', 'Second law of thermodynamics', 'Carnot cycle', 'Availability', 'Exergy'] },
                        { title: 'Properties of Substances', topics: ['Pure substances', 'Phase diagrams', 'Thermodynamic properties', 'Steam tables', 'Ideal gas relations'] },
                        { title: 'Power Cycles', topics: ['Otto cycle', 'Diesel cycle', 'Brayton cycle', 'Rankine cycle', 'Refrigeration cycles'] },
                        { title: 'Heat Transfer', topics: ['Conduction', 'Convection', 'Radiation', 'Heat exchangers', 'Combined heat transfer'] }
                    ]
                },
                'materials-science': {
                    desc: 'Study of material properties and behavior',
                    units: [
                        { title: 'Atomic Structure', topics: ['Atomic bonding', 'Crystal structures', 'Defects in crystals', 'Grain boundaries', 'Phase diagrams'] },
                        { title: 'Mechanical Properties', topics: ['Stress and strain', 'Elastic behavior', 'Plastic deformation', 'Hardness', 'Fatigue and creep'] },
                        { title: 'Material Classes', topics: ['Metals and alloys', 'Ceramics', 'Polymers', 'Composites', 'Material selection'] },
                        { title: 'Testing & Analysis', topics: ['Tensile testing', 'Hardness testing', 'Fracture testing', 'Microscopy', 'X-ray diffraction'] },
                        { title: 'Processing & Treatment', topics: ['Casting', 'Forging', 'Heat treatment', 'Surface treatment', 'Welding'] }
                    ]
                }
            };
            
            return contentMap[subject] || {
                desc: `Comprehensive study materials for ${subjectName}`,
                units: [
                    { title: 'Fundamentals', topics: ['Core concepts', 'Basic principles', 'Terminology', 'Historical background', 'Applications'] },
                    { title: 'Main Topics', topics: ['Key concepts', 'Theory development', 'Problem solving', 'Case studies', 'Best practices'] },
                    { title: 'Advanced Concepts', topics: ['Complex theories', 'Advanced applications', 'Current research', 'Industry practices', 'Future trends'] },
                    { title: 'Practical Applications', topics: ['Real world examples', 'Engineering solutions', 'Design problems', 'Optimization', 'Troubleshooting'] },
                    { title: 'Summary & Review', topics: ['Key takeaways', 'Important formulas', 'Common mistakes', 'Quick reference', 'Further reading'] }
                ]
            };
        };
        
        const content = getSubjectContent();
        let unitsHtml = content.units.map(unit => `
            <h2>${unit.title}</h2>
            <ul>
                ${unit.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
        `).join('');
        
        html = `
            <div class="prose">
                <h1>${subjectName}</h1>
                <p style="color: hsl(var(--muted-foreground)); font-size: 1.05rem; margin-bottom: 1.5rem;"><strong>${content.desc}</strong></p>
                
                ${unitsHtml}
                
                <div style="margin-top: 2rem; padding: 1.5rem; background: hsl(var(--muted)); border-left: 4px solid hsl(var(--primary)); border-radius: 0.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">How to use these notes:</h3>
                    <ul style="margin: 0; padding-left: 1.5rem;">
                        <li>Read through each section systematically</li>
                        <li>Make short notes on key concepts</li>
                        <li>Practice problems from PYQs</li>
                        <li>Refer to additional resources</li>
                        <li>Review before exams</li>
                    </ul>
                </div>
                
                <p style="margin-top: 2rem; padding: 1rem; background: hsl(var(--muted)); border-radius: 0.5rem; font-size: 0.875rem;">
                    <strong>Last updated:</strong> January 2026 | <a href="contribute.html" style="color: hsl(var(--primary)); text-decoration: underline;">Contribute to improve these notes</a>
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
    let currentView = 'list'; // 'list' or 'detail'
    let selectedPYQ = null;

    // Map subject names to pyqContent keys
    const subjectContentMap = {
        'Data Structures & Algorithms': 'dsa',
        'Operating Systems': 'os',
        'Computer Networks': 'cn',
        'Database Management Systems': 'dbms',
        'Software Engineering': 'se',
        'Compiler Design': 'compiler',
        'Signals & Systems': 'signals',
        'Electromagnetics': 'electromagnetics',
        'Thermodynamics': 'thermodynamics',
        'Materials Science': 'materials',
        'Fluid Mechanics': 'fluid'
    };

    function renderPYQList(filter) {
        const filtered = filter === 'all' 
            ? pyqs 
            : pyqs.filter(p => p.branch === filter);

        if (filtered.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: hsl(var(--muted-foreground));">No PYQs found for this filter.</p>';
            return;
        }

        let html = '<div class="cards-grid">';
        filtered.forEach(p => {
            html += `
                <div class="card" style="cursor: pointer;" onclick="window.showPYQDetail('${p.subject}', ${p.year}, '${p.branch}')">
                    <h3 style="font-weight: 600; margin-bottom: 0.5rem;">${p.subject}</h3>
                    <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin-bottom: 0.75rem;">${p.branch} - ${p.year}</p>
                    <span style="font-size: 0.75rem; color: hsl(var(--primary));">Year ${p.year}</span>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }

    function renderPYQDetail(subject, year, branch) {
        const contentKey = subjectContentMap[subject];
        const questions = pyqContent[contentKey]?.questions || [];

        if (questions.length === 0) {
            container.innerHTML = `
                <div>
                    <button onclick="window.backToPYQList()" style="background: none; border: none; color: hsl(var(--primary)); cursor: pointer; font-size: 1rem; margin-bottom: 1.5rem;">
                        ← Back to PYQs
                    </button>
                    <div class="prose" style="text-align: center; color: hsl(var(--muted-foreground));">
                        <p>PYQ content for ${subject} will be available soon. <a href="contribute.html" style="color: hsl(var(--primary));">Contribute now!</a></p>
                    </div>
                </div>
            `;
            return;
        }

        let html = `
            <div>
                <button onclick="window.backToPYQList()" style="background: none; border: none; color: hsl(var(--primary)); cursor: pointer; font-size: 1rem; margin-bottom: 1.5rem;">
                    ← Back to PYQs
                </button>
                
                <div class="prose">
                    <h1>${subject}</h1>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                        <strong>Branch:</strong> ${branch} | <strong>Year:</strong> ${year}
                    </p>
                    
                    <div style="background: hsl(var(--muted)); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 2rem;">
                        <p style="margin: 0;">
                            <strong>Total Questions:</strong> ${questions.length}
                        </p>
                        <p style="margin: 0.5rem 0 0 0; color: hsl(var(--muted-foreground));">
                            Answer all questions within the given time limit.
                        </p>
                    </div>
                    
                    <div style="border-top: 2px solid hsl(var(--border)); padding-top: 2rem;">
        `;

        questions.forEach((q) => {
            html += `
                <div style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid hsl(var(--border));">
                    <h3 style="margin-bottom: 0.5rem; color: hsl(var(--primary));">Question ${q.num}</h3>
                    <p style="font-size: 1.05rem; line-height: 1.6;">${q.text}</p>
                    <p style="font-size: 0.9rem; color: hsl(var(--muted-foreground)); margin-top: 1rem;">
                        <em>Write your answer in the space provided or on separate pages if needed.</em>
                    </p>
                </div>
            `;
        });

        html += `
                    </div>
                    
                    <div style="margin-top: 2rem; padding: 1.5rem; background: hsl(var(--muted)); border-left: 4px solid hsl(var(--primary)); border-radius: 0.5rem;">
                        <h3 style="margin-bottom: 0.5rem;">Tips for solving these PYQs:</h3>
                        <ul style="margin: 0; padding-left: 1.5rem;">
                            <li>Allocate time equally for all questions</li>
                            <li>Read the questions carefully before answering</li>
                            <li>Write clear and concise answers</li>
                            <li>Refer to your notes while practicing</li>
                            <li>Compare your answers with model solutions</li>
                        </ul>
                    </div>
                    
                    <div style="margin-top: 2rem; text-align: center; padding: 1.5rem; background: hsl(var(--muted)); border-radius: 0.5rem;">
                        <p style="margin-bottom: 1rem;">Improve these PYQs by adding solutions or more questions?</p>
                        <a href="contribute.html" class="btn btn-primary">Contribute</a>
                    </div>
                </div>
            </div>
        `;

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
                renderPYQList(currentFilter);
            });
        });
    }

    // Global functions to call from inline onclick
    window.showPYQDetail = function(subject, year, branch) {
        currentView = 'detail';
        renderPYQDetail(subject, year, branch);
        filtersContainer.style.display = 'none';
    };

    window.backToPYQList = function() {
        currentView = 'list';
        renderPYQList(currentFilter);
        filtersContainer.style.display = 'block';
    };

    renderFilters();
    renderPYQList(currentFilter);
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
