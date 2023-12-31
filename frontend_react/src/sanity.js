import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-09-23',
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export async function getSpheres() {
  const spheres = await client.fetch('*[_type == "spheres"]');
  return spheres;
}

export async function getWorks() {
  const works = await client.fetch('*[_type == "works"]');
  return works;
}

export async function getSkills() {
  const skills = await client.fetch('*[_type == "skills"]');
  return skills;
}

export async function getExperiences() {
  const experiences = await client.fetch('*[_type == "experiences"]');
  return experiences;
}

export async function getTestimonials() {
  const testimonials = await client.fetch('*[_type == "testimonials"]');
  return testimonials;
}

export async function getBrands() {
  const brands = await client.fetch('*[_type == "brands"]');
  return brands;
}

export async function createContact(contact) {
  const result = client.create({ _type: 'contact', ...contact });
  return result;
}

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
