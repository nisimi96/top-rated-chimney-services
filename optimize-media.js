#!/usr/bin/env node

/**
 * Media Optimization Script
 * Converts images to WebP and optimizes video files for better web performance
 */

const sharp = require('sharp');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const util = require('util');

const execPromise = util.promisify(exec);

const projectRoot = path.join(__dirname);
const imagesDir = path.join(projectRoot, 'public', 'images');
const videosDir = path.join(projectRoot, 'public', 'videos');

// Image optimization config
const imagesToOptimize = [
  { name: 'fireplace-image.jpg', width: 1920, maxHeight: 1280 },
  { name: 'fireplace-image-2.jpg', width: 1920, maxHeight: 1280 },
  { name: 'wall-bg.jpg', width: 1920, maxHeight: 1280 },
];

// Video optimization config
const videosToOptimize = [
  { name: 'luxury-fireplace-video.mp4', crf: 23 },
];

async function optimizeImages() {
  console.log('\n🖼️  Starting image optimization...\n');

  for (const img of imagesToOptimize) {
    const inputPath = path.join(imagesDir, img.name);
    const outputPath = path.join(imagesDir, img.name.replace('.jpg', '.webp'));

    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  File not found: ${inputPath}`);
      continue;
    }

    try {
      const inputSize = fs.statSync(inputPath).size / 1024; // KB

      await sharp(inputPath)
        .resize(img.width, img.maxHeight, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: 85 })
        .toFile(outputPath);

      const outputSize = fs.statSync(outputPath).size / 1024; // KB
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`✅ ${img.name}`);
      console.log(`   Input:  ${inputSize.toFixed(1)} KB`);
      console.log(`   Output: ${outputSize.toFixed(1)} KB`);
      console.log(`   Saved:  ${savings}%\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${img.name}:`, error.message);
    }
  }
}

async function optimizeVideos() {
  console.log('\n🎬 Starting video optimization...\n');

  for (const video of videosToOptimize) {
    const inputPath = path.join(videosDir, video.name);
    const outputPath = path.join(
      videosDir,
      video.name.replace('.mp4', '-optimized.mp4')
    );

    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  File not found: ${inputPath}`);
      continue;
    }

    try {
      console.log(`⏳ Optimizing ${video.name}...`);
      console.log('   This may take several minutes...\n');

      const inputSize = fs.statSync(inputPath).size / (1024 * 1024); // MB

      // FFmpeg command with optimal settings
      const command = `ffmpeg -i "${inputPath}" -c:v libx264 -crf ${video.crf} -preset slow -c:a aac -b:a 128k -y "${outputPath}"`;

      await execPromise(command);

      const outputSize = fs.statSync(outputPath).size / (1024 * 1024); // MB
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`✅ ${video.name}`);
      console.log(`   Input:  ${inputSize.toFixed(1)} MB`);
      console.log(`   Output: ${outputSize.toFixed(1)} MB`);
      console.log(`   Saved:  ${savings}%\n`);
    } catch (error) {
      console.error(
        `❌ Error optimizing ${video.name}: ffmpeg may not be installed.`
      );
      console.error('   Install FFmpeg from: https://ffmpeg.org/download.html\n');
    }
  }
}

async function main() {
  console.log('==========================================');
  console.log('📦 Media Optimization Script');
  console.log('==========================================');

  // Check if sharp is installed
  try {
    require.resolve('sharp');
  } catch {
    console.error(
      '❌ sharp module not found. Install it with: npm install sharp'
    );
    process.exit(1);
  }

  await optimizeImages();
  await optimizeVideos();

  console.log('==========================================');
  console.log('✨ Optimization complete!');
  console.log('==========================================\n');
  console.log(
    '📝 Next steps: Update your component to use .webp images and optimized videos\n'
  );
}

main().catch(console.error);
