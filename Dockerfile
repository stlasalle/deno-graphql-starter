FROM denoland/deno

WORKDIR /app

# install denon, the deno version of nodemon, to get HMR

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

CMD ["denon", "start"]