export const pluckTopic = pathname => {
  return pathname.split("/")[2];
};

export const timeElapsed = createdAt => {
  const dateNow = Date.now();
  const dateThen = new Date(createdAt).getTime();

  let seconds = Math.floor((dateNow - dateThen) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return `${seconds}s`;
};
