<template>
    <footer class="footer-container mx-auto">
        <div class="tags-section">
            <span class="tags-label">Tags:</span>
            <div class="tags-list">
                <NuxtLink class="tag-link">On-demand manufacturing</NuxtLink>
                <NuxtLink class="tag-link">Precision manufacturing</NuxtLink>
                <NuxtLink class="tag-link">Injection molding</NuxtLink>
                <NuxtLink class="tag-link">CNC machining</NuxtLink>
                <NuxtLink class="tag-link">ESG Practices</NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer-container {
    padding: 1rem 0rem;
    background-color: white;
    border-radius: 2rem;
    width: 1100px;
}

.tags-section {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.tags-label {
    font-weight: 600;
    color: #333;
}

.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.tag-link {
    color: #3B82F6;
    text-decoration: underline;
    font-weight: 500;
    transition: color 0.2s ease;
}

.tag-link:hover {
    color: #2563EB;
}

/* 移动端适配 */
@media (max-width: 1200px) {
    .footer-container {
        width: 100%;
        padding: 1rem;
        margin: 0 1rem;
        border-radius: 1rem;
    }
}

@media (max-width: 768px) {
    .tags-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .tags-list {
        width: 100%;
        gap: 0.5rem;
    }

    .tag-link {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .footer-container {
        margin: 0 0.5rem;
    }

    .tag-link {
        font-size: 0.8rem;
    }
}
</style>
