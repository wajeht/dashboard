commit:
	git add -A
	aicommits --type conventional
	git push

deploy:
	./deploy.sh

up:
	docker compose up

down:
	docker compose down

clean:
	docker compose down --rmi all

wipe:
	docker system prune -a --volumes
