<template>
    <section id="programs" class="section-padding bg-light">
        <div class="container">
            <div class="section-header">
                <h2>Academic Programs Offered</h2>
                <p>Discover our degree programs designed for excellence in software engineering, systems, digital arts,
                    and information management.</p>
            </div>

            <div class="programs-grid">
                <div v-for="program in programs" :key="program.code" class="program-card">
                    <div class="program-badge">{{ program.code }}</div>
                    <img :src="program.logo" :alt="program.title" class="program-icon" />
                    <h3>{{ program.title }}</h3>
                    <p>{{ program.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const programs = ref([
    {
        code: 'BSIT',
        title: 'Bachelor of Science in Information Technology',
        logo: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/1-150x150.png',
        description: 'Bridges the gap between computer science and management information systems, focusing on network infrastructure, system administration, and software installation.'
    },
    {
        code: 'BSCS',
        title: 'Bachelor of Science in Computer Science',
        logo: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/CSS_PNG-150x150.png',
        description: 'Designed for students who want to study computing in depth, focusing on algorithms, theoretical foundations, hardware systems, and software engineering.'
    },
    {
        code: 'BSDMIA',
        title: 'Bachelor of Science in Digital Media & Interactive Arts',
        logo: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/MIDAS_PNG-150x150.png',
        description: 'Focuses on creativity, applied arts, and digital media technologies including 2D/3D animation, game development, and user interface design.'
    },
    {
        code: 'BLIS',
        title: 'Bachelor of Library & Information Science',
        logo: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/LISSO-150x150.png',
        description: 'Prepares students in the development, management, and preservation of information resources, digital libraries, and knowledge assets.'
    }
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

.programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
}

.program-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    position: relative;
    text-align: center;
    border: 1px solid #e5e7eb;
}

.program-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: #0d2818;
    color: #f4c430;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
}

.program-icon {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 1rem;
}

.program-card h3 {
    font-size: 1.15rem;
    color: #111827;
    margin-bottom: 0.75rem;
}

.program-card p {
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.5;
}
</style>









