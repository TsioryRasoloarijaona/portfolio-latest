 // Accordion logic: only one open at a time, toggle button text
        document.querySelectorAll('.accordion-toggle').forEach((btn, idx) => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.accordion-content').forEach((content, cidx) => {
                    const button = document.querySelectorAll('.accordion-toggle')[cidx];
                    if (cidx === idx) {
                        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                            content.style.maxHeight = '0px';
                            button.textContent = 'More';
                        } else {
                            content.style.maxHeight = content.scrollHeight + 'px';
                            button.textContent = 'Less';
                        }
                    } else {
                        content.style.maxHeight = '0px';
                        button.textContent = 'More';
                    }
                });
            });
        });