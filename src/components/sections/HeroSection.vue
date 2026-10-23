<template>
    <section id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-container">
            <img src="/assets/ccs_logo.png"  class="hero-logo" alt="CPU CCS Logo" />
            <h6 class="hero-subheading">THE CCS CORE PRACTICES THAT BUILD BRIDGES BETWEEN GAPS</h6>
            <h1 class="hero-heading">REMEMBER<br> CONNECT<br> ENGAGE<br> BUILD<br> SHARE</h1>
            <p class="hero-tagline">Different PEOPLE, One GOAL. Your FUTURE begins HERE.</p>
            <div class="hero-actions">
                <RouterLink to="/#programs" class="btn-primary">Explore Our Programs</RouterLink>
                <RouterLink to="/#faculty" class="btn-secondary">Meet Our Faculty</RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero-section {
    position: relative;
    background: linear-gradient(135deg, #0d2818 0%, #051a0e 100%);
    color: #ffffff;
    padding: 6rem 1.5rem;
    text-align: center;
}

.hero-container {
    max-width: 900px;
    margin: 0 auto;
}

.hero-logo {
    height: 110px;
    width: auto;
    margin-bottom: 1.5rem;
}

.hero-subheading {
    font-size: 0.85rem;
    letter-spacing: 2px;
    color: #f4c430;
    margin-bottom: 1rem;
    font-weight: 600;
}

.hero-heading {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.hero-tagline {
    font-size: 1.15rem;
    color: #e5e7eb;
    margin-bottom: 2rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
}

.btn-primary {
    background-color: #f4c430;
    color: #0d2818;
}

.btn-primary:hover {
    background-color: #e0b328;
}

.btn-secondary {
    border: 2px solid #ffffff;
    color: #ffffff;
}

.btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>







