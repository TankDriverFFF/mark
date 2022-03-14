const markdownBody = document.getElementById('markdown-body')
const images = markdownBody.getElementsByTagName('img')
const imageViewer = document.getElementById('image-viewer')
const imageContent = document.getElementById('image-content')
const mask = document.getElementById('image-viewer-mask')
mask.addEventListener('click', () => (imageViewer.style.display = 'none'), false)
for (let i = 0; i < images.length; i++) {
    const image = images[i]
    image.addEventListener(
        'click',
        () => {
            imageViewer.style.display = 'block'
            imageContent.src = image.src
        },
        false,
    )
}
Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
})
