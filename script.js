:root {
    --primary: #007AFF;
    --dark: #0a0a0a;
    --light: #f5f5f7;
    --gray: #86868b;
    --glass: rgba(255, 255, 255, 0.05);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--dark);
    color: var(--light);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    padding: 20px 0;
    border-bottom: 1px solid var(--glass);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -1px;
}

.logo span {
    color: var(--primary);
}

/* Hero Section */
.hero {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
}

h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 20px;
}

.highlight {
    color: var(--primary);
}

.hero p {
    font-size: 1.2rem;
    color: var(--gray);
    margin-bottom: 30px;
    max-width: 500px;
}

/* Buttons */
.btn-primary, .btn-primary-large {
    background: var(--primary);
    color: white;
    padding: 12px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.3s ease;
    display: inline-block;
    border: none;
    cursor: pointer;
}

.btn-primary-large {
    padding: 18px 45px;
    font-size: 1.1rem;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 122, 255, 0.3);
}

/* Value Cards */
.value-proposition {
    padding: 100px 0;
    background: #0f0f0f;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.grid-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.step-card {
    background: var(--glass);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    transition: 0.4s;
}

.step-card:hover {
    background: rgba(255,255,255,0.08);
    border-color: var(--primary);
}

.step-number {
    font-size: 3rem;
    font-weight: 700;
    color: rgba(0, 122, 255, 0.2);
    margin-bottom: 10px;
}

/* CTA Box */
.cta-box {
    background: linear-gradient(135deg, #001f3f 0%, #007AFF 100%);
    padding: 60px;
    border-radius: 30px;
    text-align: center;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; text-align: center; padding: 60px 0; }
    h1 { font-size: 2.5rem; }
    .hero p { margin: 0 auto 30px; }
}
