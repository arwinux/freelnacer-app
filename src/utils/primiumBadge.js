export default function primiumBadge(color) {
  switch (color) {
    case 'red':
      return 'text-red-700! bg-red-300/75! border-red-500/50!';

    case 'blue':
      return 'text-blue-700! bg-blue-300/75! border-blue-500/50!';

    case 'green':
      return 'text-green-700! bg-green-300/75! border-green-500/50!';

    case 'yellow':
      return 'text-yellow-700! bg-yellow-300/75! border-yellow-500/50!';

    case 'primary':
      return 'text-primary-700! bg-primary-300/75! border-primary-500/50!';

    default:
      return 'text-zinc-700! bg-zinc-300/75! border-zinc-500/50!';
  }
}
