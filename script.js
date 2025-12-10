// Voorivex Art Gallery - Main Script

// Initialize gallery
function initGallery() {
	const gallery = document.getElementById('gallery');
	
	// Generate all HTML at once
	const galleryHTML = images.map(image => `
		<div class="gallery-item size-${image.size}">
			<img src="${image.src}" alt="${image.alt}" loading="lazy">
			<div class="item-overlay">
				<div class="item-title">${image.alt}</div>
			</div>
		</div>
	`).join('');
	
	// Set all HTML at once
	gallery.innerHTML = galleryHTML;

	// Add click handlers for modal
	gallery.addEventListener('click', function(e) {
		const item = e.target.closest('.gallery-item');
		if (item) {
			const img = item.querySelector('img');
			openModal(img.src, img.alt);
		}
	});
}

// Modal functionality
function openModal(src, alt) {
	const modal = document.getElementById('modal');
	const modalImage = document.getElementById('modalImage');
	const modalCaption = document.getElementById('modalCaption');
	
	modalImage.src = src;
	modalImage.alt = alt;
	modalCaption.textContent = alt;
	modal.classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeModal() {
	const modal = document.getElementById('modal');
	modal.classList.remove('active');
	document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
	// Initialize gallery
	initGallery();
	
	// Modal event listeners
	const modal = document.getElementById('modal');
	const modalClose = document.getElementById('modalClose');
	
	// Close button
	modalClose.addEventListener('click', closeModal);
	
	// Click on modal wrapper to close (but not on modal content)
	modal.addEventListener('click', function(e) {
		if (!modal.contains(e.target) || e.target.classList.contains('modal-overlay')) {
			closeModal();
		}
	});
	
	// Escape key
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			closeModal();
		}
	});
});