function extractFile (path) {
    const pathParts = path.split('\\');
    const fileNameExtension = pathParts.pop();
    const lastDotIndex = fileNameExtension.lastIndexOf('.');

    const fileName = fileNameExtension.substring(0, lastDotIndex);
    const fileExtension = fileNameExtension.substring(lastDotIndex + 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')