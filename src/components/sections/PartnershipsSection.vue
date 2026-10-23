<template>
    <section id="partnerships" class="section-padding bg-light">
        <div class="container">
            <div class="section-header">
                <h2>Partnerships & Memberships</h2>
                <p>Our collaborations with industry leaders, IT alliances, and academic networks.</p>
            </div>

            <div class="partners-grid">
                <div v-for="partner in partners" :key="partner.name" class="partner-card">
                    <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
                    <h3>{{ partner.name }}</h3>
                    <p>{{ partner.category }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const partners = ref([
    { name: 'Oracle Academy', category: 'Institutional Member', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=150' },
    { name: 'Cisco Networking Academy', category: 'Academic Partner', logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=150' },
    { name: 'AWS Academy', category: 'Cloud Training Partner', logo: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=150' },
    { name: 'PSITE', category: 'Philippine Society of IT Educators', logo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=150' }
])
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section-padding {
    padding: 5rem 0;
}

.bg-light {
    background-color: #f8fafc;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.25rem;
    color: #0d2818;
    margin-bottom: 0.5rem;
}

.section-header p {
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
}

.partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
}

.partner-card {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e5e7eb;
}

.partner-logo {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
}

.partner-card h3 {
    font-size: 1.1rem;
    color: #111827;
    margin-bottom: 0.25rem;
}

.partner-card p {
    font-size: 0.85rem;
    color: #6b7280;
}
</style>







