function navigateBaseRole(role) {
  if (role === 'OWNER') return '/client';
  if (role === 'FREELANCER') return '/freelancer';
  if (role === 'ADMIN') return '/admin';
}
