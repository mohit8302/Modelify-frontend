set WEBSITE_BUCKET_NAME=modelify-frontend
set DISTRIBUTION_ID=-EHLV5ZFZPJ4N9
call npm install
call npm run build:prod
call aws --profile %1 s3 rm s3://%WEBSITE_BUCKET_NAME% --recursive
call aws --profile %1 s3 cp build s3://%WEBSITE_BUCKET_NAME% --recursive --acl public-read
call aws --profile %1 cloudfront create-invalidation --distribution-id %DISTRIBUTION_ID% --paths "/*"
