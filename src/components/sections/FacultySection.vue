<template>
  <section id="faculty" class="section-padding">
    <div class="container">
      <div class="section-header">
        <h2>Faculty & Staff</h2>
        <p>The updated personnel list, categorized by departments, featuring complete names and academic achievements.</p>
      </div>

      <div class="filter-tabs">
        <button 
          v-for="dept in departments" 
          :key="dept" 
          :class="{ active: selectedDept === dept }"
          @click="selectedDept = dept"
        >
          {{ dept }}
        </button>
      </div>

      <div class="faculty-grid">
        <div v-for="person in filteredFaculty" :key="person.name" class="faculty-card">
          <img :src="person.photo" :alt="person.name" class="faculty-photo" />
          <div class="faculty-info">
            <h4>{{ person.name }}</h4>
            <p class="role">{{ person.role }}</p>
            <p class="degree" v-if="person.degree"><span class="badge">Degree</span> {{ person.degree }}</p>
            <span class="dept-tag">{{ person.department }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedDept = ref('All')
const departments = ref(['All'])

const facultyList = ref([
  {
    name: 'Ma. Christina A. Quijano',
    role: 'Dean / Associate Professor',
    degree: 'Master of Science in Computer Science (MSCS)',
    department: 'Computer Studies',
    photo: '/assets/quijano-e1637132499305.png'
  },
  {
    name: 'Rea P. Balontong',
    role: 'Department Head (IT & IS)',
    degree: 'Master of Business Administration (MBA)',
    department: 'Computer Studies',
    photo: '/assets/balontong-754x1024.jpg'
  },
  {
    name: 'Marjee Rose B. Parreño',
    role: 'Program coordinator (BSCS, BSDMIA, and MSCS)',
    degree: 'Master of Science in Computer Science (MSCS)',
    department: 'Computer Studies',
    photo: '/assets/parreno-754x1024.jpg'
  },
  {
    name: 'Ana Mae B. Cantel',
    role: 'Program Coordinator (BLIS and MLIS)',
    degree: 'Bachelor of Library and Information Science',
    department: 'Computer Studies',
    photo: '/assets/cantel-754x1024.jpg'
  },
  {
    name: 'Lennon D. Pajar',
    role: 'Computer Laboratory Coordinator',
    department: 'Computer Studies',
    photo: '/assets/pajar-754x1024.jpg'
  },
  {
    name: 'Leo Paulo B. Beldia',
    role: 'BSIT and BSIS Program',
    department: 'Computer Studies',
    photo: '/assets/beldia-754x1024.jpg'
  },
  {
    name: 'Pedro Peter Rhys B. Cambronero',
    role: 'BSCS Program',
    department: 'Computer Studies',
    photo: '/assets/cambronero-754x1024.jpg'
  },
  {
    name: 'Lesley Joy L. Dignadice',
    role: 'BSIT and BSIS Program',
    department: 'Computer Studies',
    photo: '/assets/dignadice-1-754x1024.jpg'
  },
  {
    name: 'Rodolfo C. Eregia, Jr.',
    role: 'BSIT and BSIS Program',
    department: 'Computer Studies',
    photo: '/assets/eregia-754x1024.jpg'
  },
  {
    name: 'Donie S. Jardeleza',
    role: 'BSIT and BSIS Program',
    department: 'Computer Studies',
    photo: '/assets/jardleza-754x1024.jpg'
  },
  {
    name: 'Antonio M. Montaño, Jr',
    role: 'BSIT and BSIS Program',
    department: 'Computer Studies',
    photo: '/assets/montano-754x1024.jpg'
  },
  {
    name: 'Rose Leah Joy A. Ojacastro',
    role: 'BSIT and BSIS Program',
    department: 'Computer Studies',
    photo: '/assets/ojacastro-754x1024.jpg'
  },
  {
    name: 'Ma. Sheila C. Sapul',
    role: 'BSCS Program',
    department: 'Computer Studies',
    photo: '/assets/sapul-754x1024.jpg'
  },
  {
    name: 'Chrislyn C. Castaño',
    role: 'Secretary',
    department: 'Computer Studies',
    photo: '/assets/castano-754x1024.jpg'
  },
  {
    name: 'A.M.P. Latter P. Taasan',
    role: 'Computer Laboratory Technician',
    department: 'Computer Studies',
    photo: '/assets/taasan-754x1024.jpg'
  },
  {
    name: 'Chriselda Elaine Ador',
    role: 'Guidance Counselor',
    department: 'Computer Studies',
    photo: '/assets/ador-754x1024.jpg'
  },
  {
    name: 'Donna May Rivera',
    role: 'Library Liaison Officer',
    department: 'Computer Studies',
    photo: '/assets/rivera-754x1024.png'
  }
])

const filteredFaculty = computed(() => {
  if (selectedDept.value === 'All') return facultyList.value
  return facultyList.value.filter(p => p.department === selectedDept.value)
})
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

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.filter-tabs button {
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.filter-tabs button.active {
  background: #0d2818;
  color: #ffffff;
  border-color: #0d2818;
}

.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
}

.faculty-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
}

.faculty-photo {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.faculty-info {
  padding: 1.25rem;
}

.faculty-info h4 {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.faculty-info .role {
  color: #d97706;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.faculty-info .degree {
  font-size: 0.8rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
}

.badge {
  background-color: #e5e7eb;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
}

.dept-tag {
  display: inline-block;
  font-size: 0.75rem;
  background-color: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
</style>